import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlToText',
})
export class HtmlToTextPipe implements PipeTransform {
  transform(text: string): string {
    console.log('htmlToText', text);
    return text.replace(/(<([^>]+)>)/gi, '');
  }
}
