/* tslint:disable */
/* eslint-disable */
import { ChoiceForm } from './choice-form';
import { ChoiceOptions } from './choice-options';
import { JsonNode } from './json-node';
export interface SceneForm {

  /**
   * фоновое изображение; требуемый модуль: STORY
   */
  background: number;
  choiceOptions?: ChoiceOptions;

  /**
   * тип выбора
   */
  choiceType: 'NONE' | 'SIMPLE' | 'KEY' | 'STANDARD';
  choices?: Array<ChoiceForm>;

  /**
   * является ли сцена черновой
   */
  draft: boolean;

  /**
   * название сцены
   */
  name: string;

  /**
   * id следующей сцены
   */
  nextSceneId?: number;

  /**
   * цвет в hex формате: '#rrggbb' или '#rrggbbaa'
   */
  overlayColor: string;

  /**
   * слайды сцены; список не типизированных json объектов
   */
  slides: Array<JsonNode>;
}
