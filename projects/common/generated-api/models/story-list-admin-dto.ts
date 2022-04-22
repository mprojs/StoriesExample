/* tslint:disable */
/* eslint-disable */
import { PublicationGroupDtoShort } from './publication-group-dto-short';

/**
 * Загруженная страница с элементами
 */
export interface StoryListAdminDto {

  /**
   * время создания истории
   */
  createdAtMs: number;

  /**
   * группы, для которых опубликована эта история
   */
  groups?: Array<PublicationGroupDtoShort>;

  /**
   * id истории
   */
  id: number;

  /**
   * название истории
   */
  name: string;

  /**
   * статус истории
   */
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

  /**
   * время последнего редактирования истории
   */
  updatedAtMs: number;

  /**
   * является ли история открытой для всех
   */
  visibleForAll: boolean;
}
