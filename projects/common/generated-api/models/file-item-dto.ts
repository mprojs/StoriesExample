/* tslint:disable */
/* eslint-disable */

/**
 * обложка истории
 */
export interface FileItemDto {

  /**
   * Дата и время создания файла в миллисекундах
   */
  createdAt: number;

  /**
   * Высота файла (для изображений и видео)
   */
  height?: number;

  /**
   * Идентификатор файла
   */
  id: number;

  /**
   * Имя файла
   */
  name: string;

  /**
   * Позиция файла в списке других файлов
   */
  order?: number;

  /**
   * Идентификатор пользователя, создавшего этот файл
   */
  ownerId: number;

  /**
   * URL превью-файла для скачивания
   */
  previewUrl?: string;

  /**
   * Размер файла в байтах
   */
  size: number;

  /**
   * Тип файла
   */
  type: 'IMAGE' | 'AUDIO' | 'VIDEO' | 'FILE' | 'URL';

  /**
   * URL файла для скачивания
   */
  url: string;

  /**
   * Ширина файла (для изображений и видео)
   */
  width?: number;
}
