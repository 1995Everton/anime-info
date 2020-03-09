import {
  getDom,
  $Query,
  removeSpacesString,
  getNameAndImage,
  getImage,
  getAndRemoveTagBr,
  getListElement,
  getNameAndAllImageCharacter,
} from '../utils/elements.dom';
import {
  Info,
  Debut,
  Tags,
  Voices,
  Affiliation,
  Clan,
  KekkeiGenkai,
  NatureType,
  OptionFields,
  defaultOption,
} from './models';
import { getFunctionFactory, getKeyValue } from '../utils/helper';
import { Language } from '../shared/enums';
import { Config, GenericPhoto } from '../shared/models';
import { TagsPtBr, TagsEs, Characters } from './enums';
import { Photos } from './models/Photos';
import { getNameAndPhotoTable, getVoices, getQuotes } from './utils/dom';
import { Quotes } from './models/Quotes';

export class Naruto {
  private _tags: Tags;

  private _baseUrl = 'https://naruto.fandom.com/###wiki/';

  private _character: string | Characters | (string | Characters)[] = '';

  private _lang: Language;

  constructor(config: Config = { lang: Language.PT_BR }) {
    this._lang = config.lang;
    this._tags = this._getTags(config.lang);
  }

  private _getTags(lang: Language): Tags {
    switch (lang) {
      case Language.PT_BR:
        this._baseUrl = this._baseUrl.replace('###', 'pt-br/');
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
            country: TagsPtBr.VoicesCountry,
          },
        };
      case Language.ES:
        this._baseUrl = this._baseUrl.replace('###', 'es/');
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
            country: TagsEs.VoicesCountry,
          },
        };
      case Language.EN:
      default:
        throw new Error('language not available');
    }
  }

  public async getCharacter(name: Characters | string, option?: OptionFields): Promise<Info | null> {
    try {
      this._character = name;

      const document = await getDom(this._baseUrl + this._character);

      const options = Object.assign(defaultOption, option);

      const keys = Object.keys(options);

      let info: Info = {};

      for (const key of keys) {
        if (getKeyValue(options, key)) {
          info[key] = await getFunctionFactory(this, document, '_' + key);
        }
      }

      return info;
    } catch (error) {
      console.log(error);
      throw new Error('The requested Character does not exist');
    }
  }

  private _debut = (document: Document): Debut => {
    return {
      anime: $Query(document, this._tags.anime),
      game: $Query(document, this._tags.game),
      manga: $Query(document, this._tags.manga),
      movie: $Query(document, this._tags.movie),
      novel: $Query(document, this._tags.novel),
      ova: $Query(document, this._tags.ova),
    };
  };

  private _name = (document: Document): string | null => {
    return $Query(document, this._tags.name);
  };

  private _description = (document: Document): string | null => {
    return $Query(document, this._tags.description);
  };

  private _titles = (document: Document): (string | null)[] => {
    return getListElement(document, this._tags.titles);
  };

  private _birthday = (document: Document): string | null => {
    return $Query(document, this._tags.birthday);
  };

  private _status = (document: Document): string | null => {
    return $Query(document, this._tags.status);
  };

  private _age = (document: Document): string[] => {
    return getAndRemoveTagBr(document, this._tags.age);
  };

  private _height = (document: Document): string[] => {
    return getAndRemoveTagBr(document, this._tags.height);
  };

  private _weight = (document: Document): string[] => {
    return getAndRemoveTagBr(document, this._tags.weight);
  };

  private _classification = (document: Document): (string | null)[] => {
    return getListElement(document, this._tags.classification);
  };

  private _team = (document: Document): (string | null)[] => {
    return getListElement(document, this._tags.team);
  };

  private _partner = (document: Document): (string | null)[] => {
    return getListElement(document, this._tags.partner);
  };

  private _occupation = (document: Document): (string | null)[] => {
    return getListElement(document, this._tags.occupation);
  };

  private _ninja_rank = (document: Document): (string | null)[] => {
    return getListElement(document, this._tags.ninja_rank);
  };

  private _ninja_registration = (document: Document): string | null => {
    return $Query(document, this._tags.ninja_registration);
  };

  private _family = (document: Document): (string | null)[] => {
    return getListElement(document, this._tags.family);
  };

  private _jutsu = async (document: Document): Promise<(string | null)[] | GenericPhoto[]> => {
    const url = `${this._baseUrl}Jutsu_de_${this._character}`;
    return await getNameAndPhotoTable(document, this._tags.jutsu, this._lang, url);
  };

  private _nature_type = (document: Document): NatureType[] => {
    return getNameAndImage(document, this._tags.nature_type);
  };

  private _tools = async (document: Document): Promise<(string | null)[] | GenericPhoto[]> => {
    const url = `${this._baseUrl}Equipamentos_de_${this._character}`;
    return await getNameAndPhotoTable(document, this._tags.tools, this._lang, url);
  };

  private _quotes = async (document: Document): Promise<(string | null | Quotes)[]> => {
    const url = `${this._baseUrl}Frases_de_${this._character}`;
    return await getQuotes(document, this._tags.quotes, this._lang, url);
  };

  private _sex = (document: Document): string | null => {
    return $Query(document, this._tags.sex);
  };

  private _photo = (document: Document): Photos[] => {
    return getNameAndAllImageCharacter(document, this._tags.photo);
  };

  private _voices = (document: Document): Voices[] => {
    const { name, country } = this._tags.voices;
    return getVoices(document, country, name);
  };

  private _kekkei_genkai = (document: Document): KekkeiGenkai[] => {
    return getNameAndImage(document, this._tags.kekkei_genkai);
  };

  private _affiliation = (document: Document): Affiliation[] => {
    return getNameAndImage(document, this._tags.affiliation);
  };

  private _clan = (document: Document): Clan[] => {
    return getNameAndImage(document, this._tags.clan);
  };
}
