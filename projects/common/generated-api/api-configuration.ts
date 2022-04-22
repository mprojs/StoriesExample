/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { SnackbarService } from '@shared/services/snackbar.service';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '/';

  constructor(
    public snackbarService: SnackbarService
  ) {
  }
}

/**
 * Parameters for `.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
