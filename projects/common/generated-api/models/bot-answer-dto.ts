/* tslint:disable */
/* eslint-disable */
import { FileItemDto } from './file-item-dto';
import { TipDto } from './tip-dto';

/**
 * Объект с успешным ответом
 */
export interface BotAnswerDto {

  /**
   * id следующего ответа чат бота, который будет возращен при отправке нового сообщения пользователем
   */
  firstOption: number;

  /**
   * является ли ответ проработкой
   */
  isProcess: boolean;

  /**
   * уровень чат бота, на котором будет появляться этот ответ
   */
  level: number;

  /**
   * фраза для вставления в строку ввода для ее дополнения пользователем
   */
  phrase?: string;
  processAudioDto?: FileItemDto;

  /**
   * id второго ответа чат бота в случае, данный ответ чат бота является вопросом ветвления
   */
  secondOption?: number;
  sticker?: FileItemDto;

  /**
   * текст ответа
   */
  text: string;
  tip?: TipDto;

  /**
   * тип ответа чат бота
   */
  type: 'SIMPLE' | 'YES_NO' | 'ANSWER' | 'FILL_IN';
}
