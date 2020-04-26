import { OptionFields } from '../../shared/models/OptionsFields';

const option = [
  'abilities',
  'affiliation',
  'age',
  'alias',
  'class',
  'description',
  'gallery',
  'height',
  'location',
  'name',
  'occupation',
  // 'description',
  'partner',
  'photo',
  'race',
  'rank',
  'sex',
  'status',
  'weight'
  // 'titles',
  // 'birthday',
  // 'status',
  // 'age',
  // 'height',
  // 'weight',
  // 'classification',
  // 'team',
  // 'partner',
  // 'occupation',
  // 'ninja_rank',
  // 'ninja_registration',
  // 'family',
  // 'jutsu',
  // 'nature_type',
  // 'tools',
  // 'quotes',
  // 'sex',
  // 'debut',
  // 'voices',
  // 'kekkei_genkai',
  // 'affiliation',
  // 'clan'
] as const;

export type OptionOnePunchMan = typeof option[number];

export const defaultOptionFieldsOnePunchMan: OptionFields<OptionOnePunchMan> = {
  exclude: [],
  only: [
    'name',
    'photo',
    'alias',
    'race',
    'sex',
    'age',
    'status',
    'weight',
    'height',
    'location',
    'abilities',
    'occupation',
    'rank',
    'class',
    'affiliation',
    'partner',
    'description',
    'gallery'
  ]
};
