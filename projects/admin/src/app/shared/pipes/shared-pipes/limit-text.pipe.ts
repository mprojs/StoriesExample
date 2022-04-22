import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitText',
})
export class LimitTextPipe implements PipeTransform {
  transform(text: string, length: number, ending?: string): string {
    if (!text) { return text; }
    return text.length <= length ? text : text.slice(0, length) + (ending || '...');
  }
}
