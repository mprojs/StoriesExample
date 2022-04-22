/* tslint:disable */
/* eslint-disable */

/**
 * сцены новеллы
 */
export interface SceneListAdminDto {

  /**
   * тип выбора
   */
  choice?: 'NONE' | 'SIMPLE' | 'KEY' | 'STANDARD';

  /**
   * id сцены
   */
  id: number;

  /**
   * название сцены
   */
  name: string;

  /**
   * порядок сцены в главе
   */
  order?: 'FIRST' | 'A' | 'KEY' | 'B' | 'LAST';
}
