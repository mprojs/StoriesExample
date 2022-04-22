import { Injectable } from '@angular/core';
import { StoryListAdminDto } from '@common/generated-api/models/story-list-admin-dto';
import { StorySort } from '@common/generated-api/models/story-sort';
import { AdminStoriesApiService } from '@common/generated-api/services/admin-stories-api.service';
import { IServiceWithSorting } from '@shared/directives/table-sort-directive/table-sorting.directive';
import { BaseListService } from '@shared/services/base-list.service';
import { BehaviorSubject, tap } from 'rxjs';

interface StoryListFilters {
  searchQuery: string;
}

@Injectable({
  providedIn: 'root'
})
export class StoryListService extends BaseListService<StoryListAdminDto> implements IServiceWithSorting {
  filters$ = new BehaviorSubject<StoryListFilters>({ searchQuery: '' });
  defaultSorting: StorySort = {
    order: 'DESC',
    type: 'CREATED'
  };
  sorting$ = new BehaviorSubject<StorySort>(this.defaultSorting);

  constructor(
    private adminStoriesApiService: AdminStoriesApiService
  ) {
    super();
  }

  public updateFilters(filters: Partial<StoryListFilters>) {
    this.filters$.next({
      ...this.filters$.getValue(),
      ...filters
    });
    this.loadFirstPage();
  }

  public removeStory(id: number, permanently: boolean) {
    return this.adminStoriesApiService.adminDeleteStory({ id, permanently }).pipe(
      tap(() => {
        this.loadData()
      })
    );
  }

  protected _loadList(): void {
    const currentPageData = this.getPageData();
    const currentFilters = this.filters$.getValue();
    this.adminStoriesApiService.adminSearchStories({
      body: {
        limit: currentPageData.pageSize,
        offset: currentPageData.offset,
        query: currentFilters.searchQuery,
        sort: this.sorting$.getValue()
      }
    }).subscribe({
      next: (data) => {
        this.applyLoadedResult(data.result);
      }
    });
  }
}
