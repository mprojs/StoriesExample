/* tslint:disable */
/* eslint-disable */
export interface PublicationGroupForm {

  /**
   * Название группы пользователей/сегмента
   */
  name: string;

  /**
   * Список открытых глав для этой группы
   */
  publishedChapters?: Array<number>;

  /**
   * Список открытых историй для этой группы
   */
  publishedStories?: Array<number>;

  /**
   * Пользователи, состоящие в этой группе
   */
  userIds?: Array<number>;
}
