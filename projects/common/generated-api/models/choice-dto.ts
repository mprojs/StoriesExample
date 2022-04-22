/* tslint:disable */
/* eslint-disable */
import { FileItemDto } from './file-item-dto';

/**
 * выбор для перехода на следующую сцену
 */
export interface ChoiceDto {

  /**
   * id выбора
   */
  id: number;
  image: FileItemDto;

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
