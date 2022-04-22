import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TableSortComponent } from '@shared/directives/table-sort-directive/table-sort.component';
import { TableSortingDirective } from '@shared/directives/table-sort-directive/table-sorting.directive';
import { ITableColumn } from '@shared/types/common.types';
import { BehaviorSubject, Subject } from 'rxjs';

export interface ITableSort {
  order: 'ASC' | 'DESC';
  type: string;
}

@UntilDestroy()
@Directive({
  selector: '[appTableSort]',
})
export class TableSortDirective implements OnInit, OnChanges {
  @Input('appTableSort') column: ITableColumn<string>;
  @Output() tableSortChanged = new EventEmitter<ITableSort>();
  sorting$: BehaviorSubject<ITableSort>;
  private applySortingFn: () => void;
  private sortingApplied = new Subject<ITableSort>();
  private componentCreated = false;
  private component: ComponentRef<TableSortComponent<unknown>>;
  private clickEvent = new Subject<void>();

  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    @Optional() private sortingDirective: TableSortingDirective,
  ) {
    this.sortingApplied.pipe(untilDestroyed(this)).subscribe({
      next: (data) => {
        this.tableSortChanged.emit(data);
        if (this.applySortingFn) {
          this.applySortingFn();
        }
      },
    });
  }

  ngOnInit(): void {
    if (!this.column.sortType) { return; }
    if (!this.sortingDirective?.service) {
      // eslint-disable-next-line no-console
      console.error(
        'You must add appTableSorting directive to any of the parent elements to use appTableSort directive',
      );
    }
    this.sorting$ =
      this.sortingDirective?.service?.sorting$ || new BehaviorSubject<ITableSort>({ order: 'DESC', type: 'ID' });
    this.applySortingFn = this.sortingDirective?.service?.getLoadFirstPageFunc();

    this.renderer.listen(this.vcr.element.nativeElement, 'click', () => this.clickEvent.next());
    this.renderer.addClass(this.vcr.element.nativeElement, 'gl-pointer');

    this.init();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.init();
  }

  init() {
    if (this.column?.sortType && this.sorting$) {
      if (this.componentCreated) {
        this.component.instance.sorting$ = this.sorting$;
        this.component.instance.column = this.column;
      } else {
        this.createComponent();
      }
    }
  }

  private createComponent() {
    this.component = this.vcr.createComponent(this.resolver.resolveComponentFactory(TableSortComponent));
    this.component.instance.sorting$ = this.sorting$;
    this.component.instance.column = this.column;
    this.component.instance.eventEmitter = this.sortingApplied;
    this.component.instance.clickEvent = this.clickEvent;
    this.vcr.element.nativeElement.appendChild(this.component.location.nativeElement);
    this.componentCreated = true;
  }
}
