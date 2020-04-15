/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-empty-function */
import { JSDOM } from 'jsdom';
import { getDom } from '../../utils/elements.dom';
import { getKeyValue, getFunctionFactory } from '../../utils/helper';
import { Language } from '../enums';

export abstract class AnimesGeneric<C, O, I, T> {
  constructor(
    protected readonly _lang: Language,
    protected readonly _tags: T,
    protected readonly _baseUrl: string,
    protected readonly _defaultOption: O,
    protected _character: string | C = '',
    protected _document: Document = new JSDOM().window.document
  ) {}

  public async getCharacter(
    name: string | C,
    option?: O | undefined
  ): Promise<I | null> {
    try {
      this._character = name;

      this._document = await getDom(this._baseUrl + this._character);

      const options = Object.assign(this._defaultOption, option);

      const keys = Object.keys(options);

      const info: { [x: string]: any } = {};

      for (const key of keys) {
        if (getKeyValue(options, key)) {
          info[key] = await getFunctionFactory(this, `_${key}`);
        }
      }

      return info as I;
    } catch (error) {
      throw new Error('The requested Character does not exist');
    }
  }
}
