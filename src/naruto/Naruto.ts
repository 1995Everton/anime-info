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
  defaultOptionFieldsNaruto,
  OptionNaruto
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
import { NarutoOptions } from './enums/NarutoOptions.enum';

export class Naruto extends AnimesGeneric<
  CharactersNaruto,
  NarutoInfo,
  OptionNaruto,
  NarutoTags
> {
  constructor(config: Config = { lang: Language.PT_BR }) {
    super(
      config.lang,
      getTagByLang(config.lang),
      `https://naruto.fandom.com/${config.lang}/wiki/`,
      defaultOptionFieldsNaruto
    );
  }

  protected async toJson(keys: OptionNaruto[]): Promise<NarutoInfo> {
    const naruto: NarutoInfo = {};
    const promises = await keys.map(async value => {
      switch (value) {
        case NarutoOptions.AFFILIATION:
          naruto.affiliation = this._affiliation();
          break;
        case NarutoOptions.AGE:
          naruto.age = this._age();
          break;
        case NarutoOptions.BIRTHDAY:
          naruto.birthday = this._birthday();
          break;
        case NarutoOptions.CLAN:
          naruto.clan = this._clan();
          break;
        case NarutoOptions.CLASSIFICATION:
          naruto.classification = this._classification();
          break;
        case NarutoOptions.DEBUT:
          naruto.debut = this._debut();
          break;
        case NarutoOptions.DESCRIPTION:
          naruto.description = this._description();
          break;
        case NarutoOptions.FAMILY:
          naruto.family = this._family();
          break;
        case NarutoOptions.HEIGHT:
          naruto.height = this._height();
          break;
        case NarutoOptions.JUTSU:
          naruto.jutsu = await this._jutsu();
          break;
        case NarutoOptions.KEKKEI_GENKAI:
          naruto.kekkei_genkai = this._kekkei_genkai();
          break;
        case NarutoOptions.NAME:
          naruto.name = this._name();
          break;
        case NarutoOptions.NATURE_TYPE:
          naruto.nature_type = this._nature_type();
          break;
        case NarutoOptions.NINJA_RANK:
          naruto.ninja_rank = this._ninja_rank();
          break;
        case NarutoOptions.NINJA_REGISTRATION:
          naruto.ninja_registration = this._ninja_registration();
          break;
        case NarutoOptions.OCCUPATION:
          naruto.occupation = this._occupation();
          break;
        case NarutoOptions.PARTNER:
          naruto.partner = this._partner();
          break;
        case NarutoOptions.PHOTO:
          naruto.photo = this._photo();
          break;
        case NarutoOptions.QUOTES:
          naruto.quotes = await this._quotes();
          break;
        case NarutoOptions.SEX:
          naruto.sex = this._sex();
          break;
        case NarutoOptions.STATUS:
          naruto.status = this._status();
          break;
        case NarutoOptions.TEAM:
          naruto.team = this._team();
          break;
        case NarutoOptions.TITLES:
          naruto.titles = this._titles();
          break;
        case NarutoOptions.TOOLS:
          naruto.tools = await this._tools();
          break;
        case NarutoOptions.VOICES:
          naruto.voices = await this._voices();
          break;
        case NarutoOptions.WEIGHT:
          naruto.weight = await this._weight();
          break;
        default:
          break;
      }
    });
    await Promise.all(promises);

    return naruto;
  }

  private _debut(): Debut {
    return {
      anime: $Query(this._document, this._tags.anime),
      game: $Query(this._document, this._tags.game),
      manga: $Query(this._document, this._tags.manga),
      movie: $Query(this._document, this._tags.movie),
      novel: $Query(this._document, this._tags.novel),
      ova: $Query(this._document, this._tags.ova)
    };
  }

  private _name(): string | null {
    return $Query(this._document, this._tags.name);
  }

  private _description(): string | null {
    return $Query(this._document, this._tags.description);
  }

  private _titles(): string[] {
    return getListElement(this._document, this._tags.titles);
  }

  private _birthday(): string | null {
    return $Query(this._document, this._tags.birthday);
  }

  private _status(): string | null {
    return $Query(this._document, this._tags.status);
  }

  private _age(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.age);
  }

  private _height(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.height);
  }

  private _weight(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.weight);
  }

  private _classification(): string[] {
    return getListElement(this._document, this._tags.classification);
  }

  private _team(): string[] {
    return getListElement(this._document, this._tags.team);
  }

  private _partner(): string[] {
    return getListElement(this._document, this._tags.partner);
  }

  private _occupation(): (string | GenericPhoto)[] {
    const occupation = getNameAndImage(this._document, this._tags.occupation);
    if (occupation.length === 0) {
      return getAndRemoveTagBr(
        this._document,
        this._tags.occupation.replace(' > a', '')
      );
    }
    return occupation;
  }

  private _ninja_rank(): string[] {
    return getListElement(this._document, this._tags.ninja_rank);
  }

  private _ninja_registration(): string | null {
    return $Query(this._document, this._tags.ninja_registration);
  }

  private _family(): string[] {
    return getListElement(this._document, this._tags.family);
  }

  private async _jutsu(): Promise<(string | GenericPhoto)[]> {
    const url = `${this._baseUrl}Jutsu_de_${this._character}`;
    const jutsu = await getNameAndPhotoTable(
      this._document,
      this._tags.jutsu,
      this._lang as Language,
      url
    );
    return jutsu;
  }

  private _nature_type(): GenericPhoto[] {
    return getNameAndImage(this._document, this._tags.nature_type);
  }

  private async _tools(): Promise<string[] | GenericPhoto[]> {
    const url = `${this._baseUrl}Equipamentos_de_${this._character}`;
    const tools = await getNameAndPhotoTable(
      this._document,
      this._tags.tools,
      this._lang as Language,
      url
    );
    return tools;
  }

  private async _quotes(): Promise<(string | Quotes)[]> {
    const url = `${this._baseUrl}Frases_de_${this._character}`;
    const quotes = await getQuotes(
      this._tags.quotes,
      this._lang as Language,
      url
    );
    return quotes;
  }

  private _sex(): string | null {
    return $Query(this._document, this._tags.sex);
  }

  private _photo(): GenericPhoto[] {
    return getNameAndAllImageCharacter(this._document, this._tags.photo);
  }

  private _voices(): Voices[] {
    const { name, country } = this._tags.voices;
    return getVoices(this._document, country, name);
  }

  private _kekkei_genkai(): GenericPhoto[] {
    return getNameAndImage(this._document, this._tags.kekkei_genkai);
  }

  private _affiliation(): GenericPhoto[] {
    return getNameAndImage(this._document, this._tags.affiliation);
  }

  private _clan(): GenericPhoto[] {
    return getNameAndImage(this._document, this._tags.clan);
  }
}
