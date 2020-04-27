import { OptionFields } from '../../shared/models/OptionsFields';

const option = [
  'abilities',
  'abilities_description',
  'affiliation',
  'age',
  'alias',
  'birthday',
  'blood_type',
  'description',
  'eye_color',
  'gender',
  'hair_color',
  'height',
  'japanese_voice',
  'name',
  'nen_type',
  'occupation',
  'relatives',
  'photo',
  'status',
  'weight'
] as const;

export type OptionHunterXHunter = typeof option[number];

export const defaultOptionFieldsHunterXHunter: OptionFields<OptionHunterXHunter> = {
  exclude: [],
  only: [
    'name',
    'description',
    // 'sex',
    'height',
    'weight',
    'alias',
    'japanese_voice',
    'gender',
    'photo',
    'age',
    'birthday',
    'eye_color',
    'hair_color',
    'blood_type',
    'status',
    'occupation',
    'affiliation',
    'relatives',
    'abilities',
    'nen_type',
    'abilities_description'
  ]
};
