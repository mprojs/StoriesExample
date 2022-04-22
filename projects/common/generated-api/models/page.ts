/* tslint:disable */
/* eslint-disable */
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface Page {
  content?: Array<{
}>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
