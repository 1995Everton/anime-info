import { OnePunchManTags } from '../models';
import { Language } from '../../shared/models';
import { TagsEn, TagsEs } from '../enums/tags.enum';

export function getTagByLang(lang: Language): OnePunchManTags {
  switch (lang) {
    case 'en':
      return {
        abilities: TagsEn.Abilities,
        affiliation: TagsEn.Affiliation,
        age: TagsEn.Age,
        alias: TagsEn.Alias,
        class: TagsEn.Class,
        description: TagsEn.Description,
        gallery: TagsEn.Gallery,
        height: TagsEn.Height,
        location: TagsEn.Location,
        name: TagsEn.Name,
        occupation: TagsEn.Occupation,
        partner: TagsEn.Partner,
        photo: TagsEn.Photo,
        race: TagsEn.Race,
        rank: TagsEn.Rank,
        sex: TagsEn.Sex,
        status: TagsEn.Status,
        weight: TagsEn.Weight
      };
    case 'es':
      return {
        abilities: TagsEs.Abilities,
        affiliation: TagsEs.Affiliation,
        age: TagsEs.Age,
        alias: TagsEs.Alias,
        class: TagsEs.Class,
        description: TagsEs.Description,
        gallery: TagsEs.Gallery,
        height: TagsEs.Height,
        location: TagsEs.Location,
        name: TagsEs.Name,
        occupation: TagsEs.Occupation,
        partner: TagsEs.Partner,
        photo: TagsEs.Photo,
        race: TagsEs.Race,
        rank: TagsEs.Rank,
        sex: TagsEs.Sex,
        status: TagsEs.Status,
        weight: TagsEs.Weight
      };
    case 'pt-br':
    default:
      throw new Error('language not available');
  }
}
