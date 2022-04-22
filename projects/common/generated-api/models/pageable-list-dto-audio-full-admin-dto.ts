/* tslint:disable */
/* eslint-disable */
import { AudioFullAdminDto } from './audio-full-admin-dto';

/**
 * Объект с успешным ответом
 */
export interface PageableListDtoAudioFullAdminDto {

  /**
   * Загруженная страница с элементами
   */
  data: Array<AudioFullAdminDto>;

  /**
   * Всего элементов
   */
  totalItems: number;

  /**
   * Всего страниц
   */
  totalPages: number;
}
