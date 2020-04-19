import { OptionFields } from '../../shared/models/OptionsFields';

const option = [
  'name',
  'description',
  'photo',
  'titles',
  'birthday',
  'status',
  'age',
  'height',
  'weight',
  'classification',
  'team',
  'partner',
  'occupation',
  'ninja_rank',
  'ninja_registration',
  'family',
  'jutsu',
  'nature_type',
  'tools',
  'quotes',
  'sex',
  'debut',
  'voices',
  'kekkei_genkai',
  'affiliation',
  'clan'
] as const;

export type OptionNaruto = typeof option[number];

export const defaultOptionFieldsNaruto: OptionFields<OptionNaruto> = {
  exclude: [],
  only: [
    'name',
    'description',
    'photo',
    'titles',
    'birthday',
    'status',
    'age',
    'height',
    'weight',
    'classification',
    'team',
    'partner',
    'occupation',
    'ninja_rank',
    'ninja_registration',
    'family',
    'jutsu',
    'nature_type',
    'tools',
    'quotes',
    'sex',
    'debut',
    'voices',
    'kekkei_genkai',
    'affiliation',
    'clan'
  ]
};
