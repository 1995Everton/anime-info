import { Language } from '../../shared/enums';
import { DragonBallTags } from '../models';
import { TagsPtBr, TagsEs, TagsEn } from '../enums/tags.enum';

export function getTagByLang(lang: Language): DragonBallTags {
  switch (lang) {
    case Language.PT_BR:
      return {
        name: TagsPtBr.Name,
        description: TagsPtBr.Description,
        sex: TagsPtBr.Sex,
        birthday: TagsPtBr.Birthday,
        height: TagsPtBr.Height,
        weight: TagsPtBr.Weight,
        alias: TagsPtBr.Alias,
        race: TagsPtBr.Race,
        death: TagsPtBr.Death,
        address: TagsPtBr.Address,
        occupation: TagsPtBr.Occupation,
        relatives: TagsPtBr.Relatives,
        photo: TagsPtBr.Photo,
        appears: TagsPtBr.Appears,
        transformation: TagsPtBr.Transformation
      };
    case Language.ES:
      return {
        name: TagsEs.Name,
        description: TagsEs.Description,
        sex: TagsEs.Sex,
        birthday: TagsEs.Birthday,
        height: TagsEs.Height,
        weight: TagsEs.Weight,
        alias: TagsEs.Alias,
        race: TagsEs.Race,
        death: TagsEs.Death,
        address: TagsEs.Address,
        occupation: TagsEs.Relatives,
        relatives: TagsEs.Family,
        photo: TagsEs.Photo,
        appears: TagsEs.Appears,
        transformation: TagsEs.Transformation
      };
    case Language.EN:
      return {
        name: TagsEn.Name,
        description: TagsEn.Description,
        sex: TagsEn.Sex,
        birthday: TagsEn.Birthday,
        height: TagsEn.Height,
        weight: TagsEn.Weight,
        alias: TagsEn.Alias,
        race: TagsEn.Race,
        death: TagsEn.Death,
        address: TagsEn.Address,
        occupation: TagsEn.Occupation,
        relatives: TagsEn.Relatives,
        photo: TagsEn.Photo,
        appears: TagsEn.Appears,
        transformation: TagsEn.Transformation
      };
    default:
      throw new Error('language not available');
  }
}
