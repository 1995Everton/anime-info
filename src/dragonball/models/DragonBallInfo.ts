import { GenericPhoto } from '../../shared/models';

export interface DragonBallInfo {
  name?: string | null;
  description?: string | null;
  sex?: string | null;
  birthday?: string | null;
  height?: string | null;
  weight?: string | null;
  alias?: string[];
  race?: string[];
  death?: string[];
  address?: string[];
  occupation?: string[];
  relatives?: string[];
  photo?: GenericPhoto[];
  appears?: GenericPhoto[];
  transformation?: (GenericPhoto | string)[];
}
