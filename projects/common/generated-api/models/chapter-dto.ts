/* tslint:disable */
/* eslint-disable */
import { FileItemDto } from './file-item-dto';

/**
 * главаБ на которой остановился пользователь
 */
export interface ChapterDto {

  /**
   * описание главы
   */
  description: string;

  /**
   * id главы
   */
  id?: number;
  image: FileItemDto;

  /**
   * название главы
   */
  name: string;

  /**
   * номер главы
   */
  number: number;
}
