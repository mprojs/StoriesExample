import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { asyncScheduler, Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl } from '@ngneat/reactive-forms';

@UntilDestroy()
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() placeholder: string = `Search`;
  @Output() searchTermChanded = new EventEmitter<string>();
  searchControl = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        untilDestroyed(this),
        throttleTime(400, asyncScheduler, { leading: true, trailing: true }),
      )
      .subscribe({
        next: (data) => {
          if (this.control) {
            this.control.setValue(data);
          }
          this.searchTermChanded.emit(data);
        },
      });

    if (this.control?.value) {
      this.searchControl.setValue(this.control.value);
    }
  }
}
