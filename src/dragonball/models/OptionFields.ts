export interface OptionFields {
  name?: boolean;
  description?: boolean;
  sex?: boolean;
  birthday?: boolean;
  height?: boolean;
  weight?: boolean;
  alias?: boolean;
  race?: boolean;
  death?: boolean;
  address?: boolean;
  occupation?: boolean;
  relatives?: boolean;
  photo?: boolean;
  appears?: boolean;
  transformation?: boolean;
}

export const defaultOption: OptionFields = {
  name: true,
  description:true,
  sex: true,
  birthday: true,
  height: true,
  weight: true,
  alias: true,
  race: true,
  death: true,
  address: true,
  occupation: true,
  relatives: true,
  appears: true,
  photo: true,
  transformation: true
};
