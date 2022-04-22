import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormControl } from '@ngneat/reactive-forms';

@Pipe({
  name: 'toFormControl',
})
export class ToFormControlPipe implements PipeTransform {
  transform(value: AbstractControl): FormControl<any> {
    return value as FormControl<any>;
  }
}
