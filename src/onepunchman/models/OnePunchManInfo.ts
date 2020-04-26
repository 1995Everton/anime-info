import { GenericPhoto } from '../../shared/models';

export interface OnePunchManInfo {
  abilities?: string[];
  affiliation?: string[];
  age?: string | null;
  alias?: string[];
  class?: string | null;
  description?: string | null;
  gallery?: GenericPhoto[];
  height?: string | null;
  location?: string[];
  name?: string | null;
  occupation?: string[];
  partner?: string[];
  photo?: GenericPhoto[];
  race?: string[];
  rank?: string[];
  sex?: string | null;
  status?: string | null;
  weight?: string | null;
}
