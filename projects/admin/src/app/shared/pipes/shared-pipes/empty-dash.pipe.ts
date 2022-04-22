import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyDash'
})
export class EmptyDashPipe implements PipeTransform {

  transform<T>(value: T): string | T {
    return value == null ? '—' : value;
  }

}
