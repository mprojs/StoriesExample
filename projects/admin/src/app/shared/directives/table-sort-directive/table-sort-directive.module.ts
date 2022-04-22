import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableSortComponent } from '@shared/directives/table-sort-directive/table-sort.component';
import { TableSortingDirective } from '@shared/directives/table-sort-directive/table-sorting.directive';
import { TableSortDirective } from './table-sort.directive';

@NgModule({
  declarations: [TableSortComponent, TableSortDirective, TableSortingDirective],
  exports: [TableSortDirective, TableSortingDirective],
  imports: [CommonModule],
})
export class TableSortDirectiveModule {}
