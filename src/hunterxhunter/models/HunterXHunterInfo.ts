import { GenericPhoto } from '../../shared/models';
import { AbilitiesDescription } from './AbilitiesDescription';

export interface HunterXHunterInfo {
  abilities?: string[];
  abilities_description?: AbilitiesDescription[];
  affiliation?: string[];
  age?: string[];
  alias?: string[];
  birthday?: string | null;
  blood_type?: string | null;
  description?: string | null;
  eye_color?: string[];
  gender?: string[];
  hair_color?: string[];
  height?: string[];
  japanese_voice?: string[];
  name?: string | null;
  nen_type?: string[];
  occupation?: string[];
  photo?: GenericPhoto[];
  relatives?: string[];
  status?: string | null;
  weight?: string[];
}
