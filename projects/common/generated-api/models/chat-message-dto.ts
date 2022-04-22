/* tslint:disable */
/* eslint-disable */

/**
 * история сообщений данной комнаты с чат ботом
 */
export interface ChatMessageDto {

  /**
   * уровень комнаты с чат ботом
   */
  level: number;

  /**
   * id сессии с чат ботом
   */
  sessionId: string;

  /**
   * текст сообщения
   */
  text: string;

  /**
   * какой ответ чат бота придет пользователю после этого сообщения
   */
  toAnswer: number;

  /**
   * тип сообщения
   */
  type: 'SIMPLE' | 'BRANCHING' | 'CHAT_BOT' | 'FILL_IN';

  /**
   * id пользователя в сессии с чат-ботом
   */
  userId: number;
}
