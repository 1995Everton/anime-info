import { Photos } from './Photos';
import { Appears } from './Appears';
import { Transformation } from './Transformation';

export interface DragonBallInfo {
  [key: string]: any;
  name?: string;
  description?: string;
  sex?: string;
  birthday?: string;
  height?: string;
  weight?: string;
  alias?: string[];
  race?: string[];
  death?: string[];
  address?: string[];
  occupation?: string[];
  relatives?: string[];
  photo?: Photos[];
  appears?: Appears[];
  transformation?: (Transformation | string)[];
}
