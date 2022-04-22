/* tslint:disable */
/* eslint-disable */
const fs = require('fs');
const download = require('download-file');
const path = require('path');
const {exec} = require('child_process');

const apiUrl = "";
const apiFileName = 'api.json';
const generatedApiDirName = 'projects//common//generated-api';

const apiFile = path.join(__dirname, apiFileName);
// const generatedDirPath = path.join(__dirname, generatedApiDirName);

if (fs.existsSync(apiFile)) {
  fs.unlinkSync(apiFile);
}

regenerateApi();

function regenerateApi() {
  loadFile(apiUrl, __dirname, apiFileName).then(() => {
    convertApiFile(apiFile);
    let cmd =
      `node api-generator\\ng-openapi-gen\\lib\\index.js --config api-generator//ngOpenapiGen.config.json`;
    cmd = `ng-openapi-gen --config api-generator//ngOpenapiGen.config.json`;
    execute(cmd, copyStaticFiles);
  }).catch(err => {
    console.error(err);
  });
}

function copyStaticFiles() {
  const copyFile = (src, dst) => fs.copyFileSync(path.join(__dirname, src), dst);
  copyFile('.\\static\\base-service.ts', 'projects//common//generated-api//base-service.ts');
  copyFile('.\\static\\api-configuration.ts', 'projects//common//generated-api//api-configuration.ts');
  copyFile('.\\static\\request-builder.ts', 'projects//common//generated-api//request-builder.ts');
}


function convertApiFile(file) {
  const obj = JSON.parse(fs.readFileSync(file));
  if (!obj?.paths) {
    console.error('Wrong api file');
    return;
  }
  const pathsKeys = Object.keys(obj.paths);
  pathsKeys.forEach(key => {
    const epKeys = Object.keys(obj.paths[key]);
    epKeys.forEach(epKey => {
      let tags = obj.paths[key][epKey].tags;
      obj.paths[key][epKey].tags = tags.map(tag => tag.replace(/\./g, ''));

      // this code replaces contentType of 200 responses from *.* to application/json
      // uncomment if API gives wrong contentType
      // let responses = obj.paths[key][epKey].responses;
      // if (responses && responses['200'] && responses['200'].content) {
      //   const cont = responses['200'].content;
      //   if (cont['*/*'] && Object.keys(cont).length === 1) {
      //     // replace content *.* to application/json
      //     obj.paths[key][epKey].responses['200'].content['application/json'] = cont['*/*'];
      //     delete obj.paths[key][epKey].responses['200'].content['*/*'];
      //   }
      // }

      // this code replaces "success" to 200
      let responses = obj.paths[key][epKey].responses;
      if (responses) {
        if (responses['success']) {
          responses['200'] = responses['success'];
          delete responses['success'];
        }
        if (responses['failure']) {
          responses['400'] = responses['failure'];
          delete responses['failure'];
        }

      }
    })
  });
  const json = JSON.stringify(obj, null, 2);
  fs.writeFileSync(file, json);
}

function loadFile(url, directory, filename) {
  return new Promise((resolve, reject) => {
    download(url, {directory, filename}, function (err) {
      if (err) {
        reject(err);
      } else {
        console.log("Api file loaded");
        resolve();
      }
    });
  });
}

function execute(command, callback) {
  exec(command, function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    if (stderr?.length) {
      console.log('stderr: ' + stderr);
    }
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    callback();
  });
}
