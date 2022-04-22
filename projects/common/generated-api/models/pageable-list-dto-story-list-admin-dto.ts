/* tslint:disable */
/* eslint-disable */
import { StoryListAdminDto } from './story-list-admin-dto';

/**
 * Объект с успешным ответом
 */
export interface PageableListDtoStoryListAdminDto {

  /**
   * Загруженная страница с элементами
   */
  data: Array<StoryListAdminDto>;

  /**
   * Всего элементов
   */
  totalItems: number;

  /**
   * Всего страниц
   */
  totalPages: number;
}
