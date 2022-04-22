/* tslint:disable */
import { HttpClient } from '@angular/common/http';
/* eslint-disable */
import { Injectable } from '@angular/core';
import { ApiSettings } from '@common/config/api.settings';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// @ts-ignore
import { environment } from '../../admin/src/environments/environment';
// @ts-ignore
import { ApiConfiguration } from './api-configuration';

export interface IWrapHTTPConfig {
  disableLoader?: boolean;
  disableErrorCatching?: boolean;
  responseType?: string;
}

/**
 * Base class for services
 */
@Injectable()
export class BaseService {
  private _baseRootUrl = '';

  constructor(
    protected config: ApiConfiguration,
    protected http: HttpClient
  ) {
    if (!environment.production) {
      this._rootUrl = this._baseRootUrl;
      if (ApiSettings?.apiLocalUrl) {
        this._rootUrl = ApiSettings.apiLocalUrl;
      }

      const forceRemoteDevApi = false;
      if (forceRemoteDevApi) {
        this._rootUrl = this._baseRootUrl + '/api';
      }
    }

  }

  private _rootUrl: string = '/api';

  /**
   * Returns the root url for all operations in this service. If not set directly in this
   * service, will fallback to `ApiConfiguration.rootUrl`.
   */
  get rootUrl(): string {
    return this._rootUrl || this.config.rootUrl;
  }

  /**
   * Sets the root URL for API operations in this service.
   */
  set rootUrl(rootUrl: string) {
    this._rootUrl = rootUrl;
  }

  wrapHTTPQuery(query: Observable<any>, config?: IWrapHTTPConfig): typeof query {
    return query.pipe(
      catchError((err: any) => {
        if (!config?.disableErrorCatching) {
          try {
            console.error(err);
          } catch (e) {
            console.error('Cannot parse error object');
            console.warn(err);
          }
          this.config.snackbarService
            .showError(this.convertApiError(err?.error?.error) || `Произошла ошибка при отправке запроса на сервер.`);
        }

        return throwError(err);
      }),
      // map((data) => (config?.notExtractResult ? data : data.result)),
    );
  }

  private convertApiError(error: any): string {
    // todo disable it to prevent unreadable error messages
    console.log(error);
    if (error?.details?.length) {
      const detail = error.details[0];
      if (detail.message && detail.target) {
        return `Поле ${detail.target} ${detail.message}`;
      }
    }
    return null;
  }
}
