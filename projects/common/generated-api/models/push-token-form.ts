/* tslint:disable */
/* eslint-disable */
export interface PushTokenForm {
  appBuild?: number;
  appVersion?: string;

  /**
   * id устройства пользователя
   */
  deviceId: string;

  /**
   * тип устройства пользователя
   */
  deviceType: 'ANDROID' | 'IOS';

  /**
   * токен доступа
   */
  token: string;
}
