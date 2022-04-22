/* tslint:disable */
/* eslint-disable */
export interface StoryForm {

  /**
   * описание истории
   */
  desc: string;

  /**
   * обложка истории, требуемый модуль: STORY
   */
  image?: number;

  /**
   * является ли история главной
   */
  isMain?: boolean;

  /**
   * название истории
   */
  name: string;

  /**
   * статус истории
   */
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}
