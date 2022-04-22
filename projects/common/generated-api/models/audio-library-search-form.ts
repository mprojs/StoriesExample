/* tslint:disable */
/* eslint-disable */
export interface AudioLibrarySearchForm {

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

  /**
   * тип аудио
   */
  type: 'BGM' | 'SOUND';
}
