/* tslint:disable */
/* eslint-disable */

/**
 * Объект с успешным ответом
 */
export interface TokenDto {

  /**
   * Токен доступа
   */
  accessToken: string;

  /**
   * Токен обновления
   */
  refreshToken: string;

  /**
   * Роль пользователя
   */
  role: 'CLIENT' | 'ADMIN';

  /**
   * Идентификатор пользователя
   */
  userId: number;

  /**
   * UUID пользователя ()
   */
  uuid: string;
}
