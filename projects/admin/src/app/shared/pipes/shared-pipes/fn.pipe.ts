import { Pipe, PipeTransform } from '@angular/core';

type GenericFunction<T> = (...args: any) => T;

@Pipe({
  name: 'fn',
  pure: true
})
export class FnPipe implements PipeTransform {

  /**
   * Usage example:
   * {{ item | fn:convertItem }}
   * convertItem - method in current component that accepts item as parameter
   *
   * if method uses context (this reference), you should add class property
   * self = this
   * to component and use pipe like this
   * {{ item | fn:convertItem:self }}
   *
   * if method accepts another parameters and don't need context, PASS NULL AS FIRST PARAMETER
   * {{ item | fn:convertItem:null:someParam }}
   */
  transform<valueType, fnType>(
    templateValue: valueType,
    fnReference: GenericFunction<fnType>,
    ...args: any[]
  ): fnType {
    const context = args?.length ? args[0] : null;
    const params = args?.length > 1 ? args.slice(1) : [];
    params.unshift(templateValue);
    return fnReference.apply(context || null, params);
  }
}
