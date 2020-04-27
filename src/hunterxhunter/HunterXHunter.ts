import {
  CharactersHunterXHunter,
  HunterXHunterInfo,
  HunterXHunterTags,
  OptionHunterXHunter,
  charactersHunterXHunter,
  defaultOptionFieldsHunterXHunter,
  AbilitiesDescription
} from './models';
import {
  $Query,
  getAndRemoveTagBr,
  getNameAndAllImageCharacter
} from '../shared/utils/elements.dom';

import { Config, AnimesGeneric, GenericPhoto } from '../shared/models';
import { getTagByLang, getBaseUrl, getAbilitiesDescription } from './utils';

export class HunterXHunter extends AnimesGeneric<
  CharactersHunterXHunter,
  HunterXHunterInfo,
  OptionHunterXHunter,
  HunterXHunterTags
> {
  constructor(config: Config = { lang: 'en' }) {
    super(
      config.lang,
      getTagByLang(config.lang),
      getBaseUrl(config.lang),
      defaultOptionFieldsHunterXHunter,
      charactersHunterXHunter
    );
  }

  protected async _toJson(
    keys: OptionHunterXHunter[] = []
  ): Promise<HunterXHunterInfo> {
    const hunter_x_hunter: HunterXHunterInfo = {};
    const promises = keys.map(async value => {
      switch (value) {
        case 'abilities':
          hunter_x_hunter.abilities = this._abilities();
          break;
        case 'abilities_description':
          hunter_x_hunter.abilities_description = this._abilities_description();
          break;
        case 'affiliation':
          hunter_x_hunter.affiliation = this._affiliation();
          break;
        case 'age':
          hunter_x_hunter.age = this._age();
          break;
        case 'alias':
          hunter_x_hunter.alias = this._alias();
          break;
        case 'birthday':
          hunter_x_hunter.birthday = this._birthday();
          break;
        case 'blood_type':
          hunter_x_hunter.blood_type = this._blood_type();
          break;
        case 'description':
          hunter_x_hunter.description = this._description();
          break;
        case 'eye_color':
          hunter_x_hunter.eye_color = this._eye_color();
          break;
        case 'gender':
          hunter_x_hunter.gender = this._gender();
          break;
        case 'hair_color':
          hunter_x_hunter.hair_color = this._hair_color();
          break;
        case 'height':
          hunter_x_hunter.height = this._height();
          break;
        case 'japanese_voice':
          hunter_x_hunter.japanese_voice = this._japanese_voice();
          break;
        case 'name':
          hunter_x_hunter.name = this._name();
          break;
        case 'nen_type':
          hunter_x_hunter.nen_type = this._nen_type();
          break;
        case 'occupation':
          hunter_x_hunter.occupation = this._occupation();
          break;
        case 'relatives':
          hunter_x_hunter.relatives = this._relatives();
          break;
        case 'photo':
          hunter_x_hunter.photo = this._photo();
          break;
        case 'status':
          hunter_x_hunter.status = this._status();
          break;
        case 'weight':
          hunter_x_hunter.weight = this._weight();
          break;
        default:
          break;
      }
    });
    await Promise.all(promises);

    return hunter_x_hunter;
  }

  private _abilities(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.abilities);
  }

  private _abilities_description(): AbilitiesDescription[] {
    return getAbilitiesDescription(
      this._document,
      this._tags.abilities_description
    );
  }

  private _affiliation(): string[] {
    const affiliation: string[] = [];
    if (this._lang === 'es') {
      affiliation.push(
        ...getAndRemoveTagBr(this._document, this._tags.affiliation)
      );
    } else {
      const tags = this._tags.affiliation.split('|');
      tags.forEach(tag => {
        affiliation.push(...getAndRemoveTagBr(this._document, tag));
      });
    }
    return affiliation;
  }

  private _age(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.age);
  }

  private _alias(): string[] {
    const alias = this._tags.alias.split('|');
    return alias.map(tag => $Query(this._document, tag)) as string[];
  }

  private _birthday(): string | null {
    return $Query(this._document, this._tags.birthday);
  }

  private _blood_type(): string | null {
    return $Query(this._document, this._tags.blood_type);
  }

  private _description(): string | null {
    return $Query(this._document, this._tags.description);
  }

  private _eye_color(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.eye_color);
  }

  private _gender(): string[] {
    const gender: string[] = [];
    gender.push(...getAndRemoveTagBr(this._document, this._tags.gender));
    if (this._lang === 'en') {
      gender.push(
        ...getAndRemoveTagBr(this._document, '[data-source="sex"] > div')
      );
    }
    return gender;
  }

  private _hair_color(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.hair_color);
  }

  private _height(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.height);
  }

  private _japanese_voice(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.japanese_voice);
  }

  private _name(): string | null {
    return $Query(this._document, this._tags.name);
  }

  private _nen_type(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.nen_type);
  }

  private _occupation(): string[] {
    const occupation: string[] = [];
    if (this._lang === 'es') {
      occupation.push(
        ...getAndRemoveTagBr(this._document, this._tags.occupation)
      );
    } else {
      const tags = this._tags.occupation.split('|');
      tags.forEach(tag => {
        occupation.push(...getAndRemoveTagBr(this._document, tag));
      });
    }
    return occupation;
  }

  private _relatives(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.relatives);
  }

  private _photo(): GenericPhoto[] {
    return getNameAndAllImageCharacter(this._document, this._tags.photo);
  }

  private _status(): string | null {
    return $Query(this._document, this._tags.status);
  }

  private _weight(): string[] {
    return getAndRemoveTagBr(this._document, this._tags.weight);
  }
}
