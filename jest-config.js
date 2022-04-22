module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  roots: ['<rootDir>/projects/admin/src'],
  modulePaths: ['<rootDir>/dist'],
  moduleNameMapper: {
    '^@common/(.*)$': '<rootDir>/projects/common/$1',
    '^@shared/(.*)$': '<rootDir>/projects/admin/src/app/shared/$1',
    '^@modules/(.*)$': '<rootDir>/projects/admin/src/app/modules/$1',
  },
  // reporters: []
};

