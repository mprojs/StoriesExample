/* tslint:disable */
/* eslint-disable */
import { NovelShortAdminDto } from './novel-short-admin-dto';
import { StoryShortAdminDto } from './story-short-admin-dto';

/**
 * список историй и их новелл, использующих данное аудио
 */
export interface AudioUsageDto {

  /**
   * новеллы истории, использующие данное аудио
   */
  novels: Array<NovelShortAdminDto>;
  story: StoryShortAdminDto;
}
