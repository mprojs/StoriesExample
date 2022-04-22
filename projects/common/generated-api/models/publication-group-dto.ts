/* tslint:disable */
/* eslint-disable */
import { PublishedDataDto } from './published-data-dto';
import { UserListDto } from './user-list-dto';

/**
 * Объект с успешным ответом
 */
export interface PublicationGroupDto {
  createdMs?: number;

  /**
   * id группы
   */
  id: number;
  lastModifiedMs?: number;

  /**
   * имя группы
   */
  name: string;

  /**
   * контент, открытый для этой группы пользователей
   */
  publishedData?: Array<PublishedDataDto>;

  /**
   * пользователи, состоящие в этой группе
   */
  users?: Array<UserListDto>;
}
