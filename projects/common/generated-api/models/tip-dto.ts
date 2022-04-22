/* tslint:disable */
/* eslint-disable */
import { FileItemDto } from './file-item-dto';

/**
 * текстовая/аудио подсказка
 */
export interface TipDto {
  audio?: FileItemDto;

  /**
   * текст подсказки
   */
  text?: string;

  /**
   * тип подсказки
   */
  type: 'TEXT' | 'AUDIO';
}
