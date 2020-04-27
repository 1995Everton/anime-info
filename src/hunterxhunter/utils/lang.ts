import { HunterXHunterTags } from '../models';
import { TagsEs, TagsEn } from '../enums/tags.enum';
import { Language } from '../../shared/models';

export function getTagByLang(lang: Language): HunterXHunterTags {
  switch (lang) {
    case 'en':
      return {
        abilities: TagsEn.Abilities,
        abilities_description: TagsEn.AbilitiesDescription,
        affiliation: TagsEn.Affiliation,
        age: TagsEn.Age,
        alias: TagsEn.Alias,
        birthday: TagsEn.Birthday,
        blood_type: TagsEn.BloodType,
        description: TagsEn.Description,
        eye_color: TagsEn.EyeColor,
        gender: TagsEn.Gender,
        hair_color: TagsEn.HairColor,
        height: TagsEn.Height,
        japanese_voice: TagsEn.JapaneseVoice,
        // class: TagsEn.Class,

        // gallery: TagsEn.Gallery,

        // location: TagsEn.Location,
        name: TagsEn.Name,
        nen_type: TagsEn.NenType,
        occupation: TagsEn.Occupation,
        relatives: TagsEn.Relatives,
        photo: TagsEn.Photo,

        // partner: TagsEn.Partner,
        // photo: TagsEn.Photo,
        // race: TagsEn.Race,
        // rank: TagsEn.Rank,
        // sex: TagsEn.Sex,
        status: TagsEn.Status,
        weight: TagsEn.Weight
      };
    case 'es':
      return {
        abilities: TagsEs.Abilities,
        abilities_description: TagsEs.AbilitiesDescription,
        affiliation: TagsEs.Affiliation,
        age: TagsEs.Age,
        alias: TagsEs.Alias,
        birthday: TagsEs.Birthday,
        blood_type: TagsEs.BloodType,
        description: TagsEs.Description,
        eye_color: TagsEs.EyeColor,
        gender: TagsEs.Gender,
        hair_color: TagsEs.HairColor,
        japanese_voice: TagsEs.JapaneseVoice,
        // class: TagsEs.Class,

        // gallery: TagsEs.Gallery,
        height: TagsEs.Height,
        // location: TagsEs.Location,
        name: TagsEs.Name,
        nen_type: TagsEs.NenType,
        occupation: TagsEs.Occupation,
        relatives: TagsEs.Relatives,
        photo: TagsEs.Photo,

        // partner: TagsEs.Partner,
        // photo: TagsEs.Photo,
        // race: TagsEs.Race,
        // rank: TagsEs.Rank,
        // sex: TagsEs.Sex,
        status: TagsEs.Status,
        weight: TagsEs.Weight
      };
    case 'pt-br':
    default:
      throw new Error('language not available');
  }
}

export function getBaseUrl(lang: Language): string {
  const langs = {
    'pt-br': 'https://hunter-x-hunter.fandom.com/pt/wiki/',
    es: 'https://hunterxhunter.fandom.com/es/wiki/',
    en: 'https://hunterxhunter.fandom.com/wiki/'
  };
  return langs[lang];
}
