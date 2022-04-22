/* tslint:disable */
/* eslint-disable */
import { FileItemDto } from './file-item-dto';

/**
 * звуки новеллы
 */
export interface AudioDto {
  file: FileItemDto;

  /**
   * id аудио
   */
  id: number;

  /**
   * длительность аудио в миллисекундах
   */
  length?: number;

  /**
   * название аудио
   */
  name: string;
}
