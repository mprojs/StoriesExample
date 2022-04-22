import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Injector, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

@UntilDestroy()
@Pipe({
  name: 'fnAsync',
})
export class FnAsyncPipe implements PipeTransform, OnDestroy {
  private asyncPipe: AsyncPipe;

  constructor(private injector: Injector) {
    this.asyncPipe = new AsyncPipe(injector.get(ChangeDetectorRef));
  }

  /**
   * Usage example:
   * {{ item | fnAsync:convertItemAsync | async }}
   * convertItemAsync - method in current component that accepts item as parameter and returns observable
   *
   * if method uses context (this reference), you should add class property
   * self = this
   * to component and use pipe like this
   * {{ item | fnAsync:convertItemAsync:self | async }}
   *
   * if method accepts another parameters and don't need context, PASS NULL AS FIRST PARAMETER
   * {{ item | fnAsync:convertItemAsync:null:someParam | async }}
   */
  transform(
    templateValue: any,
    fnReference: Function,
    ...args: any[]
  ): Observable<any> {
    const context = args?.length ? args[0] : null;
    const params = args?.length > 1 ? args.slice(1) : [];
    params.unshift(templateValue);
    return fnReference.apply(context || null, params);
  }

  ngOnDestroy() {
    this.asyncPipe.ngOnDestroy();
  }
}
