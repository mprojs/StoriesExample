/* tslint:disable */
/* eslint-disable */
export interface NovelForm {

  /**
   * описание новеллы
   */
  desc: string;

  /**
   * обложка новеллы, требуемый модуль: STORY
   */
  image?: number;

  /**
   * название новеллы
   */
  name: string;

  /**
   * статус новеллы
   */
  status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}
