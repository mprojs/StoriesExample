/* tslint:disable */
/* eslint-disable */
import { StorySort } from './story-sort';
export interface StorySearchForm {

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
  sort?: StorySort;
}
