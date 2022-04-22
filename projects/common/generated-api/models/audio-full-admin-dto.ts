/* tslint:disable */
/* eslint-disable */
import { AudioUsageDto } from './audio-usage-dto';
import { FileItemDto } from './file-item-dto';

/**
 * Объект с успешным ответом
 */
export interface AudioFullAdminDto {
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

  /**
   * список историй и их новелл, использующих данное аудио
   */
  usages: Array<AudioUsageDto>;
}
