/* tslint:disable */
/* eslint-disable */

/**
 * по умолчанию: type = CREATED, order = ASC
 */
export interface StorySort {

  /**
   * по умолчанию: ASC
   */
  order: 'ASC' | 'DESC';
  type: 'NAME' | 'CREATED' | 'UPDATED' | 'STATUS';
}
