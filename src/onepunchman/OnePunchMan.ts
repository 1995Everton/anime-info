import { AnimesGeneric, Config, GenericPhoto } from '../shared/models';
import {
  OnePunchManInfo,
  OnePunchManTags,
  OptionOnePunchMan,
  CharactersOnePunchMan,
  charactersOnePunchMan,
  defaultOptionFieldsOnePunchMan
} from './models';
import {
  $Query,
  getNameAndAllImageCharacter,
  getAndRemoveTagBr,
  getListElement
} from '../shared/utils/elements.dom';
import { getTagByLang, getGallery } from './utils';

export class OnePunchMan extends AnimesGeneric<
  CharactersOnePunchMan,
  OnePunchManInfo,
  OptionOnePunchMan,
  OnePunchManTags
> {
  constructor(config: Config = { lang: 'en' }) {
    super(
      config.lang,
      getTagByLang(config.lang),
      `https://onepunchman.fandom.com/${config.lang}/wiki/`,
      defaultOptionFieldsOnePunchMan,
      charactersOnePunchMan
    );
  }

  protected async _toJson(
    keys: OptionOnePunchMan[] = []
  ): Promise<OnePunchManInfo> {
    const one_punch_man: OnePunchManInfo = {};
    const promises = await keys.map(async value => {
      switch (value) {
        case 'abilities':
          one_punch_man.abilities = this._abilities();
          break;
        case 'affiliation':
          one_punch_man.affiliation = this._affiliation();
          break;
        case 'age':
          one_punch_man.age = this._age();
          break;
        case 'alias':
          one_punch_man.alias = this._alias();
          break;
        case 'class':
          one_punch_man.class = this._class();
          break;
        case 'description':
          one_punch_man.description = this._description();
          break;
        case 'gallery':
          one_punch_man.gallery = await this._gallery();
          break;
        case 'height':
          one_punch_man.height = this._height();
          break;
        case 'location':
          one_punch_man.location = this._location();
          break;
        case 'name':
          one_punch_man.name = this._name();
          break;
        case 'occupation':
          one_punch_man.occupation = this._occupation();
          break;
        case 'partner':
          one_punch_man.partner = this._partner();
          break;
        case 'photo':
          one_punch_man.photo = this._photo();
          break;
        case 'race':
          one_punch_man.race = this._race();
          break;
        case 'rank':
          one_punch_man.rank = this._rank();
          break;
        case 'sex':
          one_punch_man.sex = this._sex();
          break;
        case 'status':
          one_punch_man.status = this._status();
          break;
        case 'weight':
          one_punch_man.weight = this._weight();
          break;
        default:
          break;
      }
    });
    await Promise.all(promises);
    return one_punch_man;
  }

  private _abilities(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.abilities);
  }

  private _partner(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.partner);
  }

  private _age(): string | null {
    return $Query(this._document, this._tags.age);
  }

  private _alias(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.alias);
  }

  private _class(): string | null {
    if (this._lang === 'es') {
      return $Query(this._document, this._tags.class);
    }
    const rank = this._rank();
    const classes = rank
      .filter(value => /-Class/g.test(value))
      .map(value => value.trim().slice(0, 1))
      .sort((a, b) => {
        if (a > b || b === 'S') return -1;
        if (a < b || a === 'S') return 1;
        return 0;
      });
    const latest_class = classes[classes.length - 1];
    return latest_class ? latest_class.slice(0, 1) : null;
  }

  private _description(): string | null {
    return $Query(this._document, this._tags.description);
  }

  private async _gallery(): Promise<GenericPhoto[]> {
    const gallery = await getGallery(
      this._baseUrl + this._character,
      this._tags.gallery,
      this._lang
    );
    return gallery;
  }

  private _height(): string | null {
    return $Query(this._document, this._tags.height);
  }

  private _location(): string[] {
    return getListElement(this._document, this._tags.location);
  }

  private _name(): string | null {
    return $Query(this._document, this._tags.name);
  }

  private _occupation(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.occupation);
  }

  private _affiliation(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.affiliation);
  }

  private _photo(): GenericPhoto[] {
    return getNameAndAllImageCharacter(this._document, this._tags.photo);
  }

  private _race(): string[] {
    const race: string[] = [];
    if (this._lang === 'es') {
      race.push(...getAndRemoveTagBr(this._document, this._tags.race));
    } else {
      race.push(...getListElement(this._document, this._tags.race));
    }
    return race;
  }

  private _rank(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.rank);
  }

  private _sex(): string | null {
    return $Query(this._document, this._tags.sex);
  }

  private _status(): string | null {
    return $Query(this._document, this._tags.status);
  }

  private _weight(): string | null {
    return $Query(this._document, this._tags.weight);
  }
}
