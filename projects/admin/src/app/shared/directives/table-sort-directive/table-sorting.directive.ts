import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { TableSortComponent } from '@shared/directives/table-sort-directive/table-sort.component';
import { ITableSort } from '@shared/directives/table-sort-directive/table-sort.directive';
import { ITableColumn } from '@shared/types/common.types';
import { BehaviorSubject } from 'rxjs';

export interface IServiceWithSorting {
  sorting$: BehaviorSubject<ITableSort>;
  getLoadFirstPageFunc: () => () => void;
}

@Directive({
  selector: '[appTableSorting]',
})
export class TableSortingDirective {
  @Input('appTableSorting') service: IServiceWithSorting;

  constructor() {}
}
