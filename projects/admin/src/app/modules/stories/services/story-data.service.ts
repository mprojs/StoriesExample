import { Injectable } from '@angular/core';
import { StoryAdminDto } from '@common/generated-api/models/story-admin-dto';
import { StoryForm } from '@common/generated-api/models/story-form';
import { AdminStoriesApiService } from '@common/generated-api/services/admin-stories-api.service';
import { BaseDataService } from '@shared/services/base-data.service';
import { SnackbarService } from '@shared/services/snackbar.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoryDataService extends BaseDataService<StoryAdminDto, StoryForm> {

  constructor(
    private adminStoriesApiService: AdminStoriesApiService,
    public snackbarService: SnackbarService
  ) {
    super();
  }

  _loadItem(id: number): Observable<StoryAdminDto> {
    return this.adminStoriesApiService.adminGetStory({ id }).pipe(
      map(data => data.result)
    );
  }

  _createItem(form: StoryForm, params: any): Observable<StoryAdminDto> {
    return this.adminStoriesApiService.adminCreateStory({ body: form }).pipe(
      map(data => data.result)
    );
  }

  _updateItem(id: number, form: StoryForm): Observable<StoryAdminDto> {
    return this.adminStoriesApiService.adminUpdateStory({ id, body: form }).pipe(
      map(data => data.result)
    );
  }

  _getDefaultItem(): StoryAdminDto {
    return {
      id: null,
      status: 'DRAFT',
      name: null,
      image: null,
      novels: [],
      desc: null,
      isMain: false
    };
  }
}
