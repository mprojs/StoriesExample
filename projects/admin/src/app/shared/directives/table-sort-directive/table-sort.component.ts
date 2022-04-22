import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ITableColumn } from '@shared/types/common.types';
import { BehaviorSubject, Subject } from 'rxjs';

interface ITableSort<T> {
  order: 'ASC' | 'DESC';
  type: T;
}

function setSortValueTyped<T>({
  sortParams,
  column,
}: {
  sortParams: { order: 'ASC' | 'DESC'; type: T };
  column: ITableColumn<T>;
}): { order: 'ASC' | 'DESC'; type: T } {
  if (column.sortType === sortParams.type) {
    return {
      type: column.sortType,
      order: sortParams.order === 'ASC' ? 'DESC' : 'ASC',
    };
  } else {
    return {
      type: column.sortType,
      order: 'ASC',
    };
  }
}

@UntilDestroy()
@Component({
  selector: 'app-table-sorting',
  template: `
    <ng-container *ngIf="column?.sortType">
      <span
        *ngIf="sorting$ | async as sorting"
        [ngClass]="{
          'sort-asc': sorting.order === 'ASC' && column.sortType === sorting.type,
          'sort-desc': sorting.order === 'DESC' && column.sortType === sorting.type,
          'sort-off': true
        }"
      ></span>
    </ng-container>
  `,
})
export class TableSortComponent<T> implements OnChanges, OnInit {
  @Input() column: ITableColumn<any>;
  @Input() sorting$: BehaviorSubject<ITableSort<T>>;
  @Input() eventEmitter: Subject<ITableSort<T>>;
  clickEvent: Subject<void>;
  private clickEventAdded = false;

  constructor() {}

  ngOnInit() {
    this.initClick();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initClick();
  }

  initClick() {
    if (this.clickEvent && !this.clickEventAdded) {
      this.clickEventAdded = true;
      this.clickEvent.pipe(untilDestroyed(this)).subscribe({
        next: (data) => {
          this.onClick();
        },
      });
    }
  }

  onClick() {
    const sorting = setSortValueTyped<T>({
      sortParams: this.sorting$.getValue(),
      column: this.column,
    });
    this.sorting$.next(sorting);
    this.eventEmitter.next(sorting);
  }
}
