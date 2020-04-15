import {
  $Query,
  getNameAndImage,
  getAndRemoveTagBr,
  getListElement,
  getNameAndAllImageCharacter
} from '../utils/elements.dom';
import {
  NarutoInfo,
  Debut,
  NarutoTags,
  Voices,
  Affiliation,
  Clan,
  KekkeiGenkai,
  NatureType,
  OptionFields,
  defaultOption,
  Photos
} from './models';
import { Language } from '../shared/enums';
import { Config, GenericPhoto, AnimesGeneric } from '../shared/models';
import { CharactersNaruto } from './enums';
import {
  getNameAndPhotoTable,
  getVoices,
  getQuotes,
  getTagByLang
} from './utils';
import { Quotes } from './models/Quotes';

export class Naruto extends AnimesGeneric<
  CharactersNaruto,
  OptionFields,
  NarutoInfo,
  NarutoTags
> {
  constructor(config: Config = { lang: Language.PT_BR }) {
    super(
      config.lang,
      getTagByLang(config.lang),
      `https://naruto.fandom.com/${config.lang}/wiki/`,
      defaultOption
    );
  }

  private _debut = (): Debut => ({
    anime: $Query(this._document, this._tags.anime),
    game: $Query(this._document, this._tags.game),
    manga: $Query(this._document, this._tags.manga),
    movie: $Query(this._document, this._tags.movie),
    novel: $Query(this._document, this._tags.novel),
    ova: $Query(this._document, this._tags.ova)
  });

  private _name = (): string | null => $Query(this._document, this._tags.name);

  private _description = (): string | null =>
    $Query(this._document, this._tags.description);

  private _titles = (): (string | null)[] =>
    getListElement(this._document, this._tags.titles);

  private _birthday = (): string | null =>
    $Query(this._document, this._tags.birthday);

  private _status = (): string | null =>
    $Query(this._document, this._tags.status);

  private _age = (): (string | null)[] =>
    getAndRemoveTagBr(this._document, this._tags.age);

  private _height = (): (string | null)[] =>
    getAndRemoveTagBr(this._document, this._tags.height);

  private _weight = (): (string | null)[] =>
    getAndRemoveTagBr(this._document, this._tags.weight);

  private _classification = (): (string | null)[] =>
    getListElement(this._document, this._tags.classification);

  private _team = (): (string | null)[] =>
    getListElement(this._document, this._tags.team);

  private _partner = (): (string | null)[] =>
    getListElement(this._document, this._tags.partner);

  private _occupation = (): (string | null)[] =>
    getListElement(this._document, this._tags.occupation);

  private _ninja_rank = (): (string | null)[] =>
    getListElement(this._document, this._tags.ninja_rank);

  private _ninja_registration = (): string | null =>
    $Query(this._document, this._tags.ninja_registration);

  private _family = (): (string | null)[] =>
    getListElement(this._document, this._tags.family);

  private _jutsu = async (): Promise<(string | null)[] | GenericPhoto[]> => {
    const url = `${this._baseUrl}Jutsu_de_${this._character}`;
    const jutsu = await getNameAndPhotoTable(
      this._document,
      this._tags.jutsu,
      this._lang as Language,
      url
    );
    return jutsu;
  };

  private _nature_type = (): NatureType[] =>
    getNameAndImage(this._document, this._tags.nature_type);

  private _tools = async (): Promise<(string | null)[] | GenericPhoto[]> => {
    const url = `${this._baseUrl}Equipamentos_de_${this._character}`;
    const tools = await getNameAndPhotoTable(
      this._document,
      this._tags.tools,
      this._lang as Language,
      url
    );
    return tools;
  };

  private _quotes = async (): Promise<(string | null | Quotes)[]> => {
    const url = `${this._baseUrl}Frases_de_${this._character}`;
    const quotes = await getQuotes(
      this._tags.quotes,
      this._lang as Language,
      url
    );
    return quotes;
  };

  private _sex = (): string | null => $Query(this._document, this._tags.sex);

  private _photo = (): Photos[] =>
    getNameAndAllImageCharacter(this._document, this._tags.photo);

  private _voices = (): Voices[] => {
    const { name, country } = this._tags.voices;
    return getVoices(this._document, country, name);
  };

  private _kekkei_genkai = (): KekkeiGenkai[] =>
    getNameAndImage(this._document, this._tags.kekkei_genkai);

  private _affiliation = (): Affiliation[] =>
    getNameAndImage(this._document, this._tags.affiliation);

  private _clan = (): Clan[] =>
    getNameAndImage(this._document, this._tags.clan);
}
