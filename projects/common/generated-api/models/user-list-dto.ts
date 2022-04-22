/* tslint:disable */
/* eslint-disable */
import { LocationDto } from './location-dto';
import { PublicationGroupDtoShort } from './publication-group-dto-short';
import { SubscriptionDto } from './subscription-dto';

/**
 * пользователи, состоящие в этой группе
 */
export interface UserListDto {
  email?: string;
  id: number;
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
