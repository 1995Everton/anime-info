import {
  defaultOptionFieldsDragonBall,
  DragonBallTags,
  DragonBallInfo,
  OptionDragonBall,
  CharactersDragonBall,
  charactersDragonBall
} from './models';
import {
  $Query,
  getNameAndAllImageCharacter,
  getAndRemoveTagBr,
  getListElement,
  getNameAndImageOnly
} from '../shared/utils/elements.dom';

import { Config, GenericPhoto, AnimesGeneric } from '../shared/models';
import { getTagByLang, getTransformations } from './utils';

export class DragonBall extends AnimesGeneric<
  CharactersDragonBall,
  DragonBallInfo,
  OptionDragonBall,
  DragonBallTags
> {
  constructor(config: Config = { lang: 'pt-br' }) {
    super(
      config.lang,
      getTagByLang(config.lang),
      `https://dragonball.fandom.com/${config.lang}/wiki/`,
      defaultOptionFieldsDragonBall,
      charactersDragonBall
    );
  }

  protected async toJson(keys: OptionDragonBall[]): Promise<DragonBallInfo> {
    const dragon_ball: DragonBallInfo = {};
    const promises = await keys.map(async value => {
      switch (value) {
        case 'address':
          dragon_ball.address = this._address();
          break;
        case 'alias':
          dragon_ball.alias = this._alias();
          break;
        case 'appears':
          dragon_ball.appears = this._appears();
          break;
        case 'birthday':
          dragon_ball.birthday = this._birthday();
          break;
        case 'death':
          dragon_ball.death = this._death();
          break;
        case 'description':
          dragon_ball.description = this._description();
          break;
        case 'height':
          dragon_ball.height = this._height();
          break;
        case 'name':
          dragon_ball.name = this._name();
          break;
        case 'occupation':
          dragon_ball.occupation = this._occupation();
          break;
        case 'photo':
          dragon_ball.photo = this._photo();
          break;
        case 'race':
          dragon_ball.race = this._race();
          break;
        case 'relatives':
          dragon_ball.relatives = this._relatives();
          break;
        case 'sex':
          dragon_ball.sex = this._sex();
          break;
        case 'transformation':
          dragon_ball.transformation = this._transformation();
          break;
        case 'weight':
          dragon_ball.weight = this._weight();
          break;
        default:
          break;
      }
    });
    await Promise.all(promises);

    return dragon_ball;
  }

  private _name(): string | null {
    return $Query(this._document, this._tags.name);
  }

  private _description(): string | null {
    return $Query(this._document, this._tags.description);
  }

  private _sex(): string | null {
    return $Query(this._document, this._tags.sex);
  }

  private _birthday(): string | null {
    return $Query(this._document, this._tags.birthday);
  }

  private _height(): string | null {
    return $Query(this._document, this._tags.height);
  }

  private _weight(): string | null {
    return $Query(this._document, this._tags.weight);
  }

  private _alias(): string[] {
    const alias: string[] = [];
    if (this._lang === 'pt-br') {
      alias.push(...getListElement(this._document, this._tags.alias, true));
    } else {
      alias.push(...getAndRemoveTagBr(this._document, this._tags.alias));
    }
    return alias;
  }

  private _race(): string[] {
    return getListElement(this._document, this._tags.race);
  }

  private _death(): string[] {
    return getListElement(this._document, this._tags.death, true);
  }

  private _address(): string[] {
    return getListElement(this._document, this._tags.address);
  }

  private _occupation(): string[] {
    const alias: string[] = [];
    if (this._lang === 'pt-br') {
      alias.push(
        ...getListElement(this._document, this._tags.occupation, true)
      );
    } else {
      alias.push(...getAndRemoveTagBr(this._document, this._tags.occupation));
    }
    return alias;
  }

  private _relatives(): string[] {
    return getListElement(this._document, this._tags.relatives, true);
  }

  private _appears(): GenericPhoto[] {
    return getNameAndImageOnly(this._document, this._tags.appears);
  }

  private _photo(): GenericPhoto[] {
    return getNameAndAllImageCharacter(this._document, this._tags.photo);
  }

  private _transformation(): (GenericPhoto | string)[] {
    return getTransformations(
      this._document,
      this._tags.transformation,
      this._lang
    );
  }
}
