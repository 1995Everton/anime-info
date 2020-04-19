import { OptionFields } from '../../shared/models/OptionsFields';

const option = [
  'name',
  'description',
  'sex',
  'birthday',
  'height',
  'weight',
  'alias',
  'race',
  'death',
  'address',
  'occupation',
  'relatives',
  'photo',
  'appears',
  'transformation'
] as const;

export type OptionDragonBall = typeof option[number];

export const defaultOptionFieldsDragonBall: OptionFields<OptionDragonBall> = {
  exclude: [],
  only: [
    'name',
    'description',
    'sex',
    'birthday',
    'height',
    'weight',
    'alias',
    'race',
    'death',
    'address',
    'occupation',
    'relatives',
    'photo',
    'appears',
    'transformation'
  ]
};
