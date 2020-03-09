export interface OptionFields {
  name?: boolean;
  description?: boolean;
  photo?: boolean;
  titles?: boolean;
  birthday?: boolean;
  status?: boolean;
  age?: boolean;
  height?: boolean;
  weight?: boolean;
  classification?: boolean;
  team?: boolean;
  partner?: boolean;
  occupation?: boolean;
  ninja_rank?: boolean;
  ninja_registration?: boolean;
  family?: boolean;
  jutsu?: boolean;
  nature_type?: boolean;
  tools?: boolean;
  quotes?: boolean;
  sex?: boolean;
  debut?: boolean;
  voices?: boolean;
  kekkei_genkai?: boolean;
  affiliation?: boolean;
  clan?: boolean;
}

export const defaultOption: OptionFields = {
  name: true,
  description: true,
  photo: true,
  titles: true,
  birthday: true,
  status: true,
  age: true,
  height: true,
  weight: true,
  classification: true,
  team: true,
  partner: true,
  occupation: true,
  ninja_rank: true,
  ninja_registration: true,
  family: true,
  jutsu: true,
  nature_type: true,
  tools: true,
  quotes: true,
  sex: true,
  debut: true,
  voices: true,
  kekkei_genkai: true,
  affiliation: true,
  clan: true,
};
