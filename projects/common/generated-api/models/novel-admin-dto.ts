/* tslint:disable */
/* eslint-disable */
import { FileItemDto } from './file-item-dto';
import { HeroDto } from './hero-dto';
import { NovelSoundsAdminDto } from './novel-sounds-admin-dto';
import { PublicationGroupDtoShort } from './publication-group-dto-short';
import { SceneListAdminDto } from './scene-list-admin-dto';

/**
 * Объект с успешным ответом
 */
export interface NovelAdminDto {

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
   * персонажи новеллы
   */
  heroes: Array<HeroDto>;

  /**
   * id новеллы
   */
  id: number;
  image?: FileItemDto;

  /**
   * название новеллы
   */
  name: string;

  /**
   * сцены новеллы
   */
  scenes: Array<SceneListAdminDto>;
  sounds: NovelSoundsAdminDto;

  /**
   * статус истории
   */
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';

  /**
   * id истории, к которой относится глава
   */
  storyId: number;

  /**
   * время последнего обновления новеллы
   */
  updatedAtMs: number;
}
