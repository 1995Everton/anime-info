import { Debut } from './Debut';
import { Voices } from './Voices';
import { GenericPhoto } from '../../shared/models/GenericsPhoto';
import { Quotes } from './Quotes';

export interface NarutoInfo {
  sex?: string | null;
  description?: string | null;
  photo?: GenericPhoto[];
  titles?: string[];
  name?: string | null;
  birthday?: string | null;
  status?: string | null;
  age?: string[];
  height?: string[];
  weight?: string[];
  classification?: string[];
  team?: string[];
  partner?: string[];
  occupation?: (string | GenericPhoto)[];
  ninja_rank?: string[];
  ninja_registration?: string | null;
  family?: string[];
  jutsu?: (string | GenericPhoto)[];
  nature_type?: GenericPhoto[];
  tools?: (string | GenericPhoto)[];
  quotes?: (string | Quotes)[];
  debut?: Debut;
  voices?: Voices[];
  kekkei_genkai?: GenericPhoto[];
  affiliation?: GenericPhoto[];
  clan?: GenericPhoto[];
}
