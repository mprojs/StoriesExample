/* tslint:disable */
/* eslint-disable */

/**
 * null при отсутствии подписки
 */
export interface SubscriptionDto {

  /**
   * время истечения подписки в миллисекундах
   */
  expirationMs: number;

  /**
   * является ли подписка неограниченной по времени (подписка навсегда)
   */
  lifetime: boolean;
}
