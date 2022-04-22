/* tslint:disable */
/* eslint-disable */
import { UserListDto } from './user-list-dto';

/**
 * Объект с успешным ответом
 */
export interface PageableListDtoUserListDto {

  /**
   * Загруженная страница с элементами
   */
  data: Array<UserListDto>;

  /**
   * Всего элементов
   */
  totalItems: number;

  /**
   * Всего страниц
   */
  totalPages: number;
}
