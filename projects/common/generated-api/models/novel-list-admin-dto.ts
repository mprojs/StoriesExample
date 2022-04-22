/* tslint:disable */
/* eslint-disable */
import { PublicationGroupDtoShort } from './publication-group-dto-short';

/**
 * список новелл истории
 */
export interface NovelListAdminDto {

  /**
   * время создания новеллы
   */
  createdAtMs: number;

  /**
   * описание новеллы
   */
  desc: string;

  /**
   * группы, для которых опубликована эта глава
   */
  groups?: Array<PublicationGroupDtoShort>;

  /**
   * id новеллы
   */
  id: number;

  /**
   * название новеллы
   */
  name: string;

  /**
   * статус публикации новеллы
   */
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

  /**
   * время последнего обновления новеллы
   */
  updatedAtMs: number;
}
