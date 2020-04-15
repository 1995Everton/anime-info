import { NarutoTags } from '../models';
import { Language } from '../../shared/enums';
import { TagsPtBr, TagsEs } from '../enums';

export function getTagByLang(lang: Language): NarutoTags {
  switch (lang) {
    case Language.PT_BR:
      return {
        name: TagsPtBr.Name,
        description: TagsPtBr.Description,
        photo: TagsPtBr.Photo,
        titles: TagsPtBr.Titles,
        birthday: TagsPtBr.Birthday,
        status: TagsPtBr.Status,
        age: TagsPtBr.Age,
        height: TagsPtBr.Height,
        weight: TagsPtBr.Weight,
        classification: TagsPtBr.Classification,
        team: TagsPtBr.Team,
        partner: TagsPtBr.Partner,
        occupation: TagsPtBr.Occupation,
        ninja_rank: TagsPtBr.NinjaRank,
        ninja_registration: TagsPtBr.NinjaRegistration,
        family: TagsPtBr.Family,
        jutsu: TagsPtBr.Jutsu,
        nature_type: TagsPtBr.NatureType,
        tools: TagsPtBr.Tools,
        quotes: TagsPtBr.Quotes,
        sex: TagsPtBr.Sex,
        kekkei_genkai: TagsPtBr.KekkeiGenkai,
        affiliation: TagsPtBr.Affiliation,
        clan: TagsPtBr.Clan,
        anime: TagsPtBr.Anime,
        game: TagsPtBr.Game,
        manga: TagsPtBr.Manga,
        movie: TagsPtBr.Movie,
        novel: TagsPtBr.Novel,
        ova: TagsPtBr.Ova,
        voices: {
          name: TagsPtBr.VoicesName,
          country: TagsPtBr.VoicesCountry
        }
      };
    case Language.ES:
      return {
        name: TagsEs.Name,
        description: TagsEs.Description,
        photo: TagsEs.Photo,
        titles: TagsEs.Titles,
        birthday: TagsEs.Birthday,
        status: TagsEs.Status,
        age: TagsEs.Age,
        sex: TagsEs.Sex,
        height: TagsEs.Height,
        weight: TagsEs.Weight,
        classification: TagsEs.Classification,
        team: TagsEs.Team,
        partner: TagsEs.Partner,
        occupation: TagsEs.Occupation,
        ninja_rank: TagsEs.NinjaRank,
        ninja_registration: TagsEs.NinjaRegistration,
        family: TagsEs.Family,
        jutsu: TagsEs.Jutsu,
        nature_type: TagsEs.NatureType,
        tools: TagsEs.Tools,
        quotes: TagsEs.Quotes,
        kekkei_genkai: TagsEs.KekkeiGenkai,
        affiliation: TagsEs.Affiliation,
        clan: TagsEs.Clan,
        anime: TagsEs.Anime,
        game: TagsEs.Game,
        manga: TagsEs.Manga,
        movie: TagsEs.Movie,
        novel: TagsEs.Novel,
        ova: TagsEs.Ova,
        voices: {
          name: TagsEs.VoicesName,
          country: TagsEs.VoicesCountry
        }
      };
    case Language.EN:
    default:
      throw new Error('language not available');
  }
}
