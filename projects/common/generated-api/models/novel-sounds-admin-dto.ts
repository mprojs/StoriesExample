/* tslint:disable */
/* eslint-disable */
import { AudioDto } from './audio-dto';

/**
 * аудио новеллы
 */
export interface NovelSoundsAdminDto {

  /**
   * музыка новеллы
   */
  backgroundSounds: Array<AudioDto>;

  /**
   * звуки новеллы
   */
  soundEffects: Array<AudioDto>;
}
