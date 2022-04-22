/* tslint:disable */
/* eslint-disable */
export interface AudioCreateForm {

  /**
   * id аудио файла; требуемый модуль: STORY
   */
  file: number;

  /**
   * добавить ли созданное аудио в библиотеку
   */
  library: boolean;

  /**
   * имя аудио; по умолчанию имя файла
   */
  name?: string;

  /**
   * тип аудио
   */
  type: 'BGM' | 'SOUND';
}
