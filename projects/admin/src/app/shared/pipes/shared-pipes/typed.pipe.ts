import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typed',
})
export class TypedPipe implements PipeTransform {

  transform<T>(object: any, typeRef: T): T {
    return object as T;
  }
}
