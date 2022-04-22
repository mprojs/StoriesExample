/* tslint:disable */
/* eslint-disable */

/**
 * по умолчанию: type = ID, order = ASC
 */
export interface UserSort {

  /**
   * по умолчанию: ASC
   */
  order?: 'ASC' | 'DESC';
  type: 'ID' | 'EMAIL' | 'NAME' | 'LOCATION' | 'SUBSCRIPTION' | 'GROUP';
}
