/* tslint:disable */
import { HttpClient, HttpResponse } from '@angular/common/http';
/* eslint-disable */
import { Injectable } from '@angular/core';
import { StoryAdminDto } from '@common/generated-api/models/story-admin-dto';
import { StoryListAdminDto } from '@common/generated-api/models/story-list-admin-dto';
import { GetRand } from '@shared/utils/mix.utils';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiConfiguration } from '../api-configuration';
import { BaseService, IWrapHTTPConfig } from '../base-service';

import { EmptyResponse } from '../models/empty-response';
import { NovelForm } from '../models/novel-form';
import { ResponseListStoryShortProjection } from '../models/response-list-story-short-projection';
import { ResponseNovelAdminDto } from '../models/response-novel-admin-dto';
import { ResponsePageableListDtoStoryListAdminDto } from '../models/response-pageable-list-dto-story-list-admin-dto';
import { ResponseStoryAdminDto } from '../models/response-story-admin-dto';
import { StoryForm } from '../models/story-form';
import { StorySearchForm } from '../models/story-search-form';
import { RequestBuilder } from '../request-builder';
import { StrictHttpResponse } from '../strict-http-response';

type StoryDTO = StoryAdminDto & StoryListAdminDto;

@Injectable({
  providedIn: 'root'
})
export class AdminStoriesApiService extends BaseService {
  fakeData: StoryDTO[];

  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);

    this.fakeData = this.generateFakeStories(100);
  }

  /**
   * Path part for operation adminGetStory
   */
  static readonly AdminGetStoryPath = '/v1/admin/stories/{id}';

  /**
   * Get story.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminGetStory()` instead.
   *
   * This method doesn't expect any request body.
   */
  private adminGetStory$Response(params: {
      id: number;
    }, config?: IWrapHTTPConfig
  ): Observable<StrictHttpResponse<ResponseStoryAdminDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdminStoriesApiService.AdminGetStoryPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    }, config)).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseStoryAdminDto>;
      })
    );
  }

  /**
   * Get story.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminGetStory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminGetStory(params: {
      id: number;
    }, config?: IWrapHTTPConfig
  ): Observable<ResponseStoryAdminDto> {

    return of({
      result: this.fakeData.find(item => item.id === params.id)
    });

    // return this.wrapHTTPQuery(this.adminGetStory$Response(params, config).pipe(
    //   map((r: StrictHttpResponse<ResponseStoryAdminDto>) => r.body as ResponseStoryAdminDto)
    // ), config);
  }

  /**
   * Path part for operation adminUpdateStory
   */
  static readonly AdminUpdateStoryPath = '/v1/admin/stories/{id}';

  /**
   * Update story.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminUpdateStory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  private adminUpdateStory$Response(params: {
      id: number;
      body: StoryForm
    }, config?: IWrapHTTPConfig
  ): Observable<StrictHttpResponse<ResponseStoryAdminDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdminStoriesApiService.AdminUpdateStoryPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    }, config)).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseStoryAdminDto>;
      })
    );
  }

  /**
   * Update story.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminUpdateStory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  adminUpdateStory(params: {
      id: number;
      body: StoryForm
    }, config?: IWrapHTTPConfig
  ): Observable<ResponseStoryAdminDto> {

    const index = this.fakeData.findIndex(item => item.id === params.id);
    if (index > -1) {
      this.fakeData[index] = {
        id: params.id,
        name: params.body.name,
        desc: params.body.desc,
        updatedAtMs: Date.now(),
        status: params.body.status,
        visibleForAll: true,
        createdAtMs: Date.now() - (GetRand() * 1000)
      };
      return of({
        result: this.fakeData[index]
      });
    } else {
      return of({
          result: null
        }
      );
    }

    // return this.wrapHTTPQuery(this.adminUpdateStory$Response(params, config).pipe(
    //   map((r: StrictHttpResponse<ResponseStoryAdminDto>) => r.body as ResponseStoryAdminDto)
    // ), config);
  }

  /**
   * Path part for operation adminDeleteStory
   */
  static readonly AdminDeleteStoryPath = '/v1/admin/stories/{id}';

  /**
   * Delete story.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminDeleteStory()` instead.
   *
   * This method doesn't expect any request body.
   */
  private adminDeleteStory$Response(params: {
      id: number;
    }, config?: IWrapHTTPConfig
  ): Observable<StrictHttpResponse<EmptyResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AdminStoriesApiService.AdminDeleteStoryPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    }, config)).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyResponse>;
      })
    );
  }

  /**
   * Delete story.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminDeleteStory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminDeleteStory(params: {
      id: number;
      permanently: boolean
    }, config?: IWrapHTTPConfig
  ): Observable<EmptyResponse> {

    return of(null);

    // return this.wrapHTTPQuery(this.adminDeleteStory$Response(params, config).pipe(
    //   map((r: StrictHttpResponse<EmptyResponse>) => r.body as EmptyResponse)
    // ), config);
  }

  /**
   * Path part for operation adminCreateStory
   */
  static readonly AdminCreateStoryPath = '/v1/admin/stories';

  /**
   * Create story.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminCreateStory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  private adminCreateStory$Response(params: {
      body: StoryForm
    }, config?: IWrapHTTPConfig
  ): Observable<StrictHttpResponse<ResponseStoryAdminDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdminStoriesApiService.AdminCreateStoryPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    }, config)).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseStoryAdminDto>;
      })
    );
  }

  /**
   * Create story.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminCreateStory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  adminCreateStory(params: {
      body: StoryForm
    }, config?: IWrapHTTPConfig
  ): Observable<ResponseStoryAdminDto> {

    return this.wrapHTTPQuery(this.adminCreateStory$Response(params, config).pipe(
      map((r: StrictHttpResponse<ResponseStoryAdminDto>) => r.body as ResponseStoryAdminDto)
    ), config);
  }

  /**
   * Path part for operation adminCreateNovel
   */
  static readonly AdminCreateNovelPath = '/v1/admin/stories/{id}/novels';

  /**
   * Create novel.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminCreateNovel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  private adminCreateNovel$Response(params: {
      id: number;
      body: NovelForm
    }, config?: IWrapHTTPConfig
  ): Observable<StrictHttpResponse<ResponseNovelAdminDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdminStoriesApiService.AdminCreateNovelPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    }, config)).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseNovelAdminDto>;
      })
    );
  }

  /**
   * Create novel.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminCreateNovel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  adminCreateNovel(params: {
      id: number;
      body: NovelForm
    }, config?: IWrapHTTPConfig
  ): Observable<ResponseNovelAdminDto> {

    return this.wrapHTTPQuery(this.adminCreateNovel$Response(params, config).pipe(
      map((r: StrictHttpResponse<ResponseNovelAdminDto>) => r.body as ResponseNovelAdminDto)
    ), config);
  }

  /**
   * Path part for operation adminPublishStory
   */
  static readonly AdminPublishStoryPath = '/v1/admin/stories/{id}/groups';

  /**
   * Publish story.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminPublishStory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  private adminPublishStory$Response(params: {
      id: number;
      body: Array<number>
    }, config?: IWrapHTTPConfig
  ): Observable<StrictHttpResponse<EmptyResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AdminStoriesApiService.AdminPublishStoryPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    }, config)).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EmptyResponse>;
      })
    );
  }

  /**
   * Publish story.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminPublishStory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  adminPublishStory(params: {
      id: number;
      body: Array<number>
    }, config?: IWrapHTTPConfig
  ): Observable<EmptyResponse> {

    return this.wrapHTTPQuery(this.adminPublishStory$Response(params, config).pipe(
      map((r: StrictHttpResponse<EmptyResponse>) => r.body as EmptyResponse)
    ), config);
  }

  /**
   * Path part for operation adminSearchStories
   */
  static readonly AdminSearchStoriesPath = '/v1/admin/stories/search';

  /**
   * Search stories.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminSearchStories()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  private adminSearchStories$Response(params: {
      body: StorySearchForm
    }, config?: IWrapHTTPConfig
  ): Observable<StrictHttpResponse<ResponsePageableListDtoStoryListAdminDto>> {

    const rb = new RequestBuilder(this.rootUrl, AdminStoriesApiService.AdminSearchStoriesPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    }, config)).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponsePageableListDtoStoryListAdminDto>;
      })
    );
  }

  /**
   * Search stories.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminSearchStories$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  adminSearchStories(params: {
      body: StorySearchForm
    }, config?: IWrapHTTPConfig
  ): Observable<ResponsePageableListDtoStoryListAdminDto> {

    // return this.wrapHTTPQuery(this.adminSearchStories$Response(params, config).pipe(
    //   map((r: StrictHttpResponse<ResponsePageableListDtoStoryListAdminDto>) => r.body as ResponsePageableListDtoStoryListAdminDto)
    // ), config);

    console.log(params);

    const data = this.fakeData.filter(item => item.name.includes(params.body.query));


    return of({
      result: {
        data: data.sort((a,b) => {
          const desc = params.body.sort?.order === 'DESC';
          let prop = (params.body.sort?.type || 'CREATED').toString().toLowerCase();
          if (prop === 'created') {
            prop = 'createdAtMs';
          }
          if (b[prop] > a[prop]) {
            return desc ? -1 : 1;
          } else {
            return desc ? 1 : -1;
          }
        }),
        totalItems: data.length,
        totalPages: Math.floor(data.length / params.body.limit)
      }
    });
  }

  private generateFakeStory() {
    return {
      ...this.generateFakeStories(1)[0],
      desc: 'Story description'
    };
  }

  private generateFakeStories(length: number): StoryDTO[] {
    return Array(length).fill(null).map((_, index) => {
      const item: StoryDTO = {
        id: index + 1,
        name: 'Story #' + (index + 1),
        desc: 'Story desc #' + (index + 1),
        createdAtMs: Date.now() - GetRand() * 1000,
        status: index % 3 ? 'PUBLISHED' : index % 5 ? 'ARCHIVED' : 'DRAFT',
        visibleForAll: true,
        groups: null,
        updatedAtMs: Date.now()
      };
      return item;
    });
  }

  /**
   * Path part for operation adminGetMainStories
   */
  static readonly AdminGetMainStoriesPath = '/v1/admin/stories/main';

  /**
   * Get id and name of all main stories.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminGetMainStories()` instead.
   *
   * This method doesn't expect any request body.
   */
  private adminGetMainStories$Response(params?: {}, config?: IWrapHTTPConfig
  ): Observable<StrictHttpResponse<ResponseListStoryShortProjection>> {

    const rb = new RequestBuilder(this.rootUrl, AdminStoriesApiService.AdminGetMainStoriesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    }, config)).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResponseListStoryShortProjection>;
      })
    );
  }

  /**
   * Get id and name of all main stories.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminGetMainStories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminGetMainStories(params?: {}, config?: IWrapHTTPConfig
  ): Observable<ResponseListStoryShortProjection> {

    return this.wrapHTTPQuery(this.adminGetMainStories$Response(params, config).pipe(
      map((r: StrictHttpResponse<ResponseListStoryShortProjection>) => r.body as ResponseListStoryShortProjection)
    ), config);
  }

}
