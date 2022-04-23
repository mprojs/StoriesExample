import { PageEvent } from '@angular/material/paginator';
import { Page } from '@common/generated-api/models/page';
import { PageCache } from '@shared/classes/page-cache';
import { PageData } from '@shared/types/page.data';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface IPaginationResult<U> {
  data?: U[];
  page?: Page;
  totalItems?: number;
  totalPages?: number;
}

export interface IPaginationBaseParams {
  pageSize?: number;
  enableSelection?: boolean;
}

export type LastResultType = { empty: boolean };

/**
 * T - type of item inside pageable list
 */
export abstract class BaseListService<T> {
  protected currentList = new BehaviorSubject<T[]>([]);
  public currentList$ = this.currentList.asObservable();
  private pageData = new BehaviorSubject<PageData>(null);
  public pageData$ = this.pageData.asObservable().pipe(filter((v) => !!v));
  public pageSizes = [ 10, 30, 50, 100 ];
  private pageCache = new PageCache<T[]>();
  private readonly defaultPageData: PageData;
  protected triggerLoadData = new Subject<void>();
  protected selectionEnabled = false;
  private lastSeletedItemsIdList = new Set<number>();
  public selectedItemsCount$ = new BehaviorSubject<number>(0);
  /** if true, currentList is empty because server has returned empty list, otherwise it's been cleared **/
  public lastResultIsEmpty$ = new BehaviorSubject<LastResultType>({ empty: false });

  protected constructor(params?: IPaginationBaseParams) {
    this.updatePageData({
      pageSize: params?.pageSize || environment.production ? 30 : 10, // todo set 30
      pageIndex: 0,
      totalItems: null,
    });
    this.defaultPageData = { ...this.pageData.getValue() };

    if (params?.enableSelection) {
      this.selectionEnabled = true;
    }

    this.triggerLoadData.subscribe({
      next: (data) => {
        this._loadList();
      },
    });
  }

  /**
   * этот метод выполняет непосредственно загрузку текущей страницы
   * получив результат, он должен передавать его в метод setDataLoadingResult
   */
  protected abstract _loadList(): void;

  loadFirstPage() {
    this.clearCache();
    this.resetPageData();
    this.loadData();
  }

  /**
   * метод повторно загружает текущую страницу с текущими фильтрами и сортировкой
   * ЕСЛИ ВЫ ИЗМЕНИЛИ ФИЛЬТРЫ ИЛИ СОРТИРОВКУ - используйте метод loadFirstPage
   */
  loadData() {
    this.clearCurrentList();
    this.triggerLoadData.next();
  }

  getCurrentList() {
    return this.currentList.getValue();
  }

  getSelectedIDList() {
    return Array.from(this.lastSeletedItemsIdList);
  }

  clearPaginatedData() {
    this.resetPageData();
    this.clearCache();
    this.clearCurrentList();
  }

  getLoadFirstPageFunc() {
    return this.loadFirstPage.bind(this);
  }

  changePageByMapPaginator(event: PageEvent) {
    if (event.pageSize !== this.pageData.getValue().pageSize) {
      this.changePageSize(event.pageSize);
      return;
    }
    this.updatePageData({ pageIndex: event.pageIndex });
    this.getPage(event.pageIndex);
  }

  applyLoadedResult(result: IPaginationResult<T> | IPaginationResult<Omit<T, 'selected'>>) {
    let data = result.data as T[];
    if (this.selectionEnabled) {
      data = data.map((item) => {
        item['selected'] = !!(item['id'] && this.lastSeletedItemsIdList.has(item['id']));
        return item;
      }) as T[];
    }
    this.fillCurrentList(data);
    this.updatePageData({ totalItems: result.totalItems });
    this.pageCache.setPage(this.pageData.getValue().pageIndex, data);
  }

  getPageData() {
    return this.pageData.getValue();
  }

  /**
   * метод сбрасывает pageData на изначальное состояние, но оставляет выбранный пользователем размер страницы
   */
  resetPageData() {
    this.pageData.next({
      ...this.defaultPageData,
      pageSize: this.pageData.getValue().pageSize,
    });
  }

  updateSelection(item: { id?: number; selected: boolean }) {
    if (item.selected) {
      this.lastSeletedItemsIdList.add(item['id']);
    } else {
      this.lastSeletedItemsIdList.delete(item['id']);
    }
    this.selectedItemsCount$.next(this.lastSeletedItemsIdList.size);
  }

  clearSelection() {
    if (!this.selectionEnabled) {
      return;
    }
    this.lastSeletedItemsIdList.clear();
    this.selectedItemsCount$.next(0);
    this.currentList.getValue().forEach(item => {
      if (item['selected']) {
        item['selected'] = false;
      }
    });
    Array.from(this.pageCache.cache.values()).forEach(list => {
      list.forEach(item => {
        if (item['selected']) {
          item['selected'] = false;
        }
      });
    });
  }

  private clearCurrentList() {
    this.currentList.next([]);
    this.lastResultIsEmpty$.next({ empty: false });
  }

  private fillCurrentList(list: T[]) {
    this.currentList.next(list);
    this.lastResultIsEmpty$.next({ empty: !list || list.length === 0 });
  }

  private clearCache() {
    this.pageCache.clear();
  }

  // private saveSelectedItems() {
  //   if (!this.selectionEnabled) {
  //     return;
  //   }
  //   this.currentList.getValue().forEach(item => {
  //     if (item['selected']) {
  //       this.lastSeletedItemsIdList.add(item['id']);
  //     } else {
  //       this.lastSeletedItemsIdList.delete(item['id']);
  //     }
  //   });
  // }

  private changePageSize(pageSize: number) {
    if (this.pageData.getValue().pageSize === pageSize) {
      return;
    }
    this.pageCache.clear();
    this.updatePageData({
      pageSize,
      pageIndex: 0,
      totalItems: 0,
    });
    this.triggerLoadData.next();
  }

  private getPage(pageIndex: number) {
    this.updatePageData({ pageIndex });
    const cachedPage = this.pageCache.getPage(pageIndex);
    if (cachedPage) {
      this.fillCurrentList(cachedPage);
      return;
    }
    this.triggerLoadData.next();
  }

  private updatePageData(data: Partial<PageData>) {
    const curValue = this.pageData.getValue();
    const newValue = {
      ...curValue,
    };
    if (data.pageSize != null) {
      newValue.pageSize = data.pageSize;
    }
    if (data.pageIndex != null) {
      newValue.pageIndex = data.pageIndex;
    }
    if (data.totalItems != null) {
      newValue.totalItems = data.totalItems;
    }
    newValue.offset = newValue.pageSize * newValue.pageIndex;
    if (isNaN(newValue.offset)) {
      newValue.offset = 0;
    }
    this.pageData.next(newValue);
  }
}
