/* tslint:disable */
/* eslint-disable */
import { FileItemDto } from './file-item-dto';
import { NovelListAdminDto } from './novel-list-admin-dto';
import { PublicationGroupDtoShort } from './publication-group-dto-short';

/**
 * Объект с успешным ответом
 */
export interface StoryAdminDto {

  /**
   * описание истории
   */
  desc: string;

  /**
   * группы, для которых опубликована эта история
   */
  groups?: Array<PublicationGroupDtoShort>;

  /**
   * id истории
   */
  id: number;
  image?: FileItemDto;

  /**
   * является ли история главной
   */
  isMain?: boolean;

  /**
   * название истории
   */
  name: string;

  /**
   * список новелл истории
   */
  novels?: Array<NovelListAdminDto>;

  /**
   * статус истории
   */
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}
