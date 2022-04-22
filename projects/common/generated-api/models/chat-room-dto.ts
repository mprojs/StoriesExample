/* tslint:disable */
/* eslint-disable */
import { ChatMessageDto } from './chat-message-dto';

/**
 * Объект с успешным ответом
 */
export interface ChatRoomDto {

  /**
   * время создания
   */
  createdDateTime: string;

  /**
   * уровень комнаты с чат ботом
   */
  level: number;

  /**
   * история сообщений данной комнаты с чат ботом
   */
  messages?: Array<ChatMessageDto>;

  /**
   * id сессии с чат ботом
   */
  sessionId: string;

  /**
   * id пользователя
   */
  userId: number;
}
