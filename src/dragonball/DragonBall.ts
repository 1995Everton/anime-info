import { Animes } from '../shared/models/Animes';
import { CharactersDragonBall } from './enums/CharactersDragonBall.enum';
import {
  OptionFields,
  defaultOption,
  Tags,
  DragonBallInfo,
  Photos,
  Appears,
  Transformation
} from './models';
import {
  getDom,
  $Query,
  getNameAndAllImageCharacter,
  getAndRemoveTagBr,
  getListElement,
  getNameAndImageOnly
} from '../utils/elements.dom';
import { getKeyValue, getFunctionFactory } from '../utils/helper';
import { Language } from '../shared/enums';
import { Config } from '../shared/models';
import { getTags } from './utils/lang';
import { getTransformations } from './utils/dom';

export class DragonBall
  implements Animes<CharactersDragonBall, OptionFields, DragonBallInfo> {
  private _tags: Tags;

  private _baseUrl = 'https://dragonball.fandom.com/###wiki/';

  private _character:
    | string
    | CharactersDragonBall
    | (string | CharactersDragonBall)[] = '';

  private _lang: Language;

  constructor(config: Config = { lang: Language.PT_BR }) {
    this._baseUrl = this._baseUrl.replace('###', `${config.lang}/`);
    this._lang = config.lang;
    this._tags = getTags(config.lang);
  }

  public async getCharacter(
    name: string | CharactersDragonBall,
    option?: OptionFields | undefined
  ): Promise<DragonBallInfo | null> {
    try {
      this._character = name;

      const document = await getDom(this._baseUrl + this._character);

      const options = Object.assign(defaultOption, option);

      const keys = Object.keys(options);

      const info: DragonBallInfo = {};

      // eslint-disable-next-line no-restricted-syntax
      for (const key of keys) {
        if (getKeyValue(options, key)) {
          // eslint-disable-next-line no-await-in-loop
          info[key] = await getFunctionFactory(this, document, `_${key}`);
        }
      }

      return info;
    } catch (error) {
      throw new Error('The requested Character does not exist');
    }
  }

  private _name = (document: Document): string | null =>
    $Query(document, this._tags.name);

  private _description = (document: Document): string | null =>
    $Query(document, this._tags.description);

  private _sex = (document: Document): string | null =>
    $Query(document, this._tags.sex);

  private _birthday = (document: Document): string | null =>
    $Query(document, this._tags.birthday);

  private _height = (document: Document): string | null =>
    $Query(document, this._tags.height);

  private _weight = (document: Document): string | null =>
    $Query(document, this._tags.weight);

  private _alias = (document: Document): (string | null)[] => {
    const alias: (string | null)[] = [];
    if (this._lang === Language.ES) {
      alias.push(...getListElement(document, this._tags.alias, true));
    } else {
      alias.push(...getAndRemoveTagBr(document, this._tags.alias));
    }
    return alias;
  };

  private _race = (document: Document): (string | null)[] =>
    getListElement(document, this._tags.race);

  private _death = (document: Document): (string | null)[] =>
    getListElement(document, this._tags.death, true);

  private _address = (document: Document): (string | null)[] =>
    getListElement(document, this._tags.address);

  private _occupation = (document: Document): (string | null)[] => {
    const alias: (string | null)[] = [];
    if (this._lang === Language.ES) {
      alias.push(...getListElement(document, this._tags.occupation, true));
    } else {
      alias.push(...getAndRemoveTagBr(document, this._tags.occupation));
    }
    return alias;
  };

  private _relatives = (document: Document): (string | null)[] =>
    getListElement(document, this._tags.relatives, true);

  private _appears = (document: Document): Appears[] =>
    getNameAndImageOnly(document, this._tags.appears);

  private _photo = (document: Document): Photos[] =>
    getNameAndAllImageCharacter(document, this._tags.photo);

  private _transformation = (
    document: Document
  ): (Transformation | string | null)[] =>
    getTransformations(document, this._tags.transformation, this._lang);
}
