/* tslint:disable */
/* eslint-disable */
import { HeroSpriteDto } from './hero-sprite-dto';

/**
 * персонажи новеллы
 */
export interface HeroDto {

  /**
   * id персонажа
   */
  id: number;

  /**
   * имя персонажа
   */
  name: string;

  /**
   * id новеллы, к которой относится персонаж
   */
  novelId: number;

  /**
   * спрайты персонажа
   */
  sprites?: Array<HeroSpriteDto>;
}
