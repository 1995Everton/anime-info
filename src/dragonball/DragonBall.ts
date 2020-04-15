import { AnimesGeneric } from '../shared/models/Animes';
import { CharactersDragonBall } from './enums/CharactersDragonBall.enum';
import {
  OptionFields,
  defaultOption,
  DragonBallTags,
  DragonBallInfo,
  Photos,
  Appears,
  Transformation
} from './models';
import {
  $Query,
  getNameAndAllImageCharacter,
  getAndRemoveTagBr,
  getListElement,
  getNameAndImageOnly
} from '../utils/elements.dom';

import { Language } from '../shared/enums';
import { Config } from '../shared/models';
import { getTagByLang, getTransformations } from './utils';

export class DragonBall extends AnimesGeneric<
  CharactersDragonBall,
  OptionFields,
  DragonBallInfo,
  DragonBallTags
> {
  constructor(config: Config = { lang: Language.PT_BR }) {
    super(
      config.lang,
      getTagByLang(config.lang),
      `https://dragonball.fandom.com/${config.lang}/wiki/`,
      defaultOption
    );
  }

  private _name = (): string | null => $Query(this._document, this._tags.name);

  private _description = (): string | null =>
    $Query(this._document, this._tags.description);

  private _sex = (): string | null => $Query(this._document, this._tags.sex);

  private _birthday = (): string | null =>
    $Query(this._document, this._tags.birthday);

  private _height = (): string | null =>
    $Query(this._document, this._tags.height);

  private _weight = (): string | null =>
    $Query(this._document, this._tags.weight);

  private _alias = (): (string | null)[] => {
    const alias: (string | null)[] = [];
    if (this._lang === Language.ES) {
      alias.push(...getListElement(this._document, this._tags.alias, true));
    } else {
      alias.push(...getAndRemoveTagBr(this._document, this._tags.alias));
    }
    return alias;
  };

  private _race = (): (string | null)[] =>
    getListElement(this._document, this._tags.race);

  private _death = (): (string | null)[] =>
    getListElement(this._document, this._tags.death, true);

  private _address = (): (string | null)[] =>
    getListElement(this._document, this._tags.address);

  private _occupation = (): (string | null)[] => {
    const alias: (string | null)[] = [];
    if (this._lang === Language.ES) {
      alias.push(
        ...getListElement(this._document, this._tags.occupation, true)
      );
    } else {
      alias.push(...getAndRemoveTagBr(this._document, this._tags.occupation));
    }
    return alias;
  };

  private _relatives = (): (string | null)[] =>
    getListElement(this._document, this._tags.relatives, true);

  private _appears = (): Appears[] =>
    getNameAndImageOnly(this._document, this._tags.appears);

  private _photo = (): Photos[] =>
    getNameAndAllImageCharacter(this._document, this._tags.photo);

  private _transformation = (): (Transformation | string | null)[] =>
    getTransformations(this._document, this._tags.transformation, this._lang);
}
