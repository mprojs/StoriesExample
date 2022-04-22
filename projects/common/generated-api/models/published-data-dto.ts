/* tslint:disable */
/* eslint-disable */
import { NovelShortAdminDto } from './novel-short-admin-dto';
import { StoryShortAdminDto } from './story-short-admin-dto';

/**
 * контент, открытый для этой группы пользователей
 */
export interface PublishedDataDto {
  chapter?: NovelShortAdminDto;
  story?: StoryShortAdminDto;
}
