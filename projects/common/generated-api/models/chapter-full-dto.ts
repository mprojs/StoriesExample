/* tslint:disable */
/* eslint-disable */
import { AudioDto } from './audio-dto';
import { FileItemDto } from './file-item-dto';
import { HeroDto } from './hero-dto';
import { SceneDto } from './scene-dto';

/**
 * Объект с успешным ответом
 */
export interface ChapterFullDto {

  /**
   * вся музыка главы
   */
  backgroundMusic: Array<AudioDto>;

  /**
   * описание главы
   */
  description: string;

  /**
   * персонажи, присутствующие в главе
   */
  heroes: Array<HeroDto>;

  /**
   * id главы
   */
  id?: number;
  image: FileItemDto;

  /**
   * название главы
   */
  name: string;

  /**
   * номер главы
   */
  number: number;

  /**
   * все сцены главы
   */
  scenes: Array<SceneDto>;

  /**
   * все звуковые эффекты главы
   */
  soundEffects: Array<AudioDto>;
}
