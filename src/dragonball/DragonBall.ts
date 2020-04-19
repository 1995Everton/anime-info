import { AnimesGeneric } from '../shared/models/Animes';
import { CharactersDragonBall } from './enums/CharactersDragonBall.enum';
import {
  defaultOptionFieldsDragonBall,
  DragonBallTags,
  DragonBallInfo,
  OptionDragonBall
} from './models';
import {
  $Query,
  getNameAndAllImageCharacter,
  getAndRemoveTagBr,
  getListElement,
  getNameAndImageOnly
} from '../utils/elements.dom';

import { Language } from '../shared/enums';
import { Config, GenericPhoto } from '../shared/models';
import { getTagByLang, getTransformations } from './utils';
import { DragonBallOptions } from './enums/DragonBallOptions.enum';

export class DragonBall extends AnimesGeneric<
  CharactersDragonBall,
  DragonBallInfo,
  OptionDragonBall,
  DragonBallTags
> {
  constructor(config: Config = { lang: Language.PT_BR }) {
    super(
      config.lang,
      getTagByLang(config.lang),
      `https://dragonball.fandom.com/${config.lang}/wiki/`,
      defaultOptionFieldsDragonBall
    );
  }

  protected async toJson(keys: OptionDragonBall[]): Promise<DragonBallInfo> {
    const dragon_ball: DragonBallInfo = {};
    const promises = await keys.map(async value => {
      switch (value) {
        case DragonBallOptions.ADDRESS:
          dragon_ball.address = this._address();
          break;
        case DragonBallOptions.ALIAS:
          dragon_ball.alias = this._alias();
          break;
        case DragonBallOptions.APPEARS:
          dragon_ball.appears = this._appears();
          break;
        case DragonBallOptions.BIRTHDAY:
          dragon_ball.birthday = this._birthday();
          break;
        case DragonBallOptions.DEATH:
          dragon_ball.death = this._death();
          break;
        case DragonBallOptions.DESCRIPTION:
          dragon_ball.description = this._description();
          break;
        case DragonBallOptions.HEIGHT:
          dragon_ball.height = this._height();
          break;
        case DragonBallOptions.NAME:
          dragon_ball.name = this._name();
          break;
        case DragonBallOptions.OCCUPATION:
          dragon_ball.occupation = this._occupation();
          break;
        case DragonBallOptions.PHOTO:
          dragon_ball.photo = this._photo();
          break;
        case DragonBallOptions.RACE:
          dragon_ball.race = this._race();
          break;
        case DragonBallOptions.RELATIVES:
          dragon_ball.relatives = this._relatives();
          break;
        case DragonBallOptions.SEX:
          dragon_ball.sex = this._sex();
          break;
        case DragonBallOptions.TRANSFORMATION:
          dragon_ball.transformation = this._transformation();
          break;
        case DragonBallOptions.WEIGHT:
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
    if (this._lang === Language.ES) {
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
    if (this._lang === Language.ES) {
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
