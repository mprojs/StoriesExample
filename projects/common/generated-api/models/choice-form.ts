/* tslint:disable */
/* eslint-disable */
export interface ChoiceForm {

  /**
   * id выбора; null при создании нового выбора
   */
  id?: number;

  /**
   * требуемый модуль: STORY
   */
  image: number;

  /**
   * положение выбора
   */
  position?: 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT';

  /**
   * текст выбора
   */
  text: string;

  /**
   * id сцены, на которую осуществляется переход при этом выборе
   */
  toSceneId: number;
}
