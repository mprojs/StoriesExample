/* tslint:disable */
/* eslint-disable */
import { Resource } from './resource';
export interface MultipartFile {
  bytes?: Array<string>;
  contentType?: string;
  empty?: boolean;
  inputStream?: {
};
  name?: string;
  originalFilename?: string;
  resource?: Resource;
  size?: number;
}
