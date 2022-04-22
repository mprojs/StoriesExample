/* tslint:disable */
/* eslint-disable */
import { UserSort } from './user-sort';
export interface UserSearchForm {

  /**
   * Количество элементов для загрузки
   */
  limit?: number;

  /**
   * Смещение относительно первого элемента в списке
   */
  offset?: number;

  /**
   * Строка поиска
   */
  query?: string;
  sort?: UserSort;
}
