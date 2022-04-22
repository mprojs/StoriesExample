/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '/';

  constructor() {
  }
}

/**
 * Parameters for `.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}