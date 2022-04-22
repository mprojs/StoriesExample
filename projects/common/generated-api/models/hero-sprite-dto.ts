/* tslint:disable */
/* eslint-disable */
import { FileItemDto } from './file-item-dto';

/**
 * спрайты персонажа
 */
export interface HeroSpriteDto {

  /**
   * описание спрайта
   */
  description: string;

  /**
   * id героя, к которому принадлежит спрайт
   */
  heroId: number;

  /**
   * id спрайта
   */
  id: number;
  image: FileItemDto;
}
