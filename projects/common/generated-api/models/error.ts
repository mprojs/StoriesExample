/* tslint:disable */
/* eslint-disable */
import { Detail } from './detail';

/**
 * Объект с ошибкой
 */
export interface Error {

  /**
   * Подробные детали ошибки
   */
  details?: Array<Detail>;

  /**
   * Сообщение об ошибке
   */
  message?: string;

  /**
   * Временная метка запроса
   */
  timestamp: string;

  /**
   * Тип ошибки
   */
  type: string;
}
