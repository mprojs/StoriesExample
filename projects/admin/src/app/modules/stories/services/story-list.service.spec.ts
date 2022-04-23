import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ApiConfiguration } from '@common/generated-api/api-configuration';
import {
  ResponsePageableListDtoStoryListAdminDto
} from '@common/generated-api/models/response-pageable-list-dto-story-list-admin-dto';
import { StoryAdminDto } from '@common/generated-api/models/story-admin-dto';
import { StoryListAdminDto } from '@common/generated-api/models/story-list-admin-dto';
import { StorySearchForm } from '@common/generated-api/models/story-search-form';
import { AdminStoriesApiService } from '@common/generated-api/services/admin-stories-api.service';
import { SnackbarService } from '@shared/services/snackbar.service';
import { GetRand } from '@shared/utils/mix.utils';
import { MockBuilder, MockModule, MockProvider, MockProviders } from 'ng-mocks';
import { delay, Observable, of } from 'rxjs';

import { StoryListService } from './story-list.service';

function generateStoriesMockData(): Array<StoryListAdminDto & StoryAdminDto> {
  return Array(100).fill(null).map((_, index) => {
    return {
      id: index + 1,
      name: 'Story #' + (index + 1),
      desc: 'Story desc #' + (index + 1),
      createdAtMs: Date.now() - GetRand() * 1000,
      status: index % 3 ? 'PUBLISHED' : index % 5 ? 'ARCHIVED' : 'DRAFT',
      visibleForAll: true,
      groups: null,
      updatedAtMs: Date.now()
    };
  });
}

function searchStory(body: StorySearchForm, data): Observable<ResponsePageableListDtoStoryListAdminDto> {
  const filtered = data.filter(item => item.name.includes(body.query)).slice(0, body.limit);
  return of({
    result: {
      data: filtered,
      totalPages: Math.ceil(filtered.length / body.limit),
      totalItems: filtered.length
    }
  });
}

fdescribe('StoryListService', () => {
  let service: StoryListService;
  let mockData: Array<StoryListAdminDto & StoryAdminDto>;

  beforeEach(() => MockBuilder(StoryListService)
      .mock(AdminStoriesApiService, {
        adminSearchStories: (params: { body: StorySearchForm }) => searchStory(params.body, mockData)
      })
  );

  beforeEach(() => {
    service = TestBed.inject(StoryListService);
    mockData = generateStoriesMockData();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search stories', () => {
    service.loadFirstPage();
    expect(service.getCurrentList().length).toBeGreaterThanOrEqual(10);
    service.updateFilters({ searchQuery: '33' });
    expect(service.filters$.getValue().searchQuery).toEqual('33');
    expect(service.getCurrentList()).toHaveLength(1);
  });
});
