/* tslint:disable */
/* eslint-disable */
import { LocationDto } from './location-dto';
import { PublicationGroupDtoShort } from './publication-group-dto-short';
import { SubscriptionDto } from './subscription-dto';

/**
 * Объект с успешным ответом
 */
export interface UserFullDto {
  createdMs: number;
  email?: string;
  id: number;

  /**
   * время последнего запроса к апи в миллисекундах
   */
  lastAccessMs?: number;
  location?: LocationDto;
  name?: string;

  /**
   * группы, в которых состоит пользователь
   */
  publicationGroupsDto?: Array<PublicationGroupDtoShort>;

  /**
   * ссылка на профиль пользователя в RevenueCat
   */
  rcLink: string;
  subscription?: SubscriptionDto;
}
