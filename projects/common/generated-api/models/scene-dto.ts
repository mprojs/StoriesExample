/* tslint:disable */
/* eslint-disable */
import { ChoiceDto } from './choice-dto';
import { ChoiceOptions } from './choice-options';
import { FileItemDto } from './file-item-dto';
import { JsonNode } from './json-node';

/**
 * Объект с успешным ответом
 */
export interface SceneDto {
  background: FileItemDto;
  choiceOptions?: ChoiceOptions;

  /**
   * тип выбора сцены
   */
  choiceType?: 'NONE' | 'SIMPLE' | 'KEY' | 'STANDARD';

  /**
   * выбор для перехода на следующую сцену
   */
  choices?: Array<ChoiceDto>;
  draft: boolean;

  /**
   * id сцены
   */
  id: number;

  /**
   * id сцены с ключевым выбором
   */
  keySceneId?: number;

  /**
   * название сцены
   */
  name: string;

  /**
   * id следующей сцены
   */
  nextSceneId?: number;

  /**
   * порядок сцены в главе
   */
  order?: 'FIRST' | 'A' | 'KEY' | 'B' | 'LAST';
  overlayColor: string;
  slideId?: JsonNode;

  /**
   * слайды сцены
   */
  slides: Array<JsonNode>;
}
