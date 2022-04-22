/* tslint:disable */
/* eslint-disable */
import { ChapterDto } from './chapter-dto';
import { FileItemDto } from './file-item-dto';

/**
 * Объект с успешным ответом
 */
export interface StoryWithProgressDto {

  /**
   * главы истории
   */
  chapters?: Array<ChapterDto>;
  current?: ChapterDto;

  /**
   * описание истории
   */
  description: string;

  /**
   * id истории
   */
  id: number;
  image?: FileItemDto;

  /**
   * название истории
   */
  name: string;
}
