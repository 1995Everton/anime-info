import { JSDOM } from 'jsdom';
import { getDom } from '../../utils/elements.dom';
import { Language } from '../enums';
import { OptionFields } from './OptionsFields';

export abstract class AnimesGeneric<C, I, O, T> {
  constructor(
    protected readonly _lang: Language,
    protected readonly _tags: T,
    protected readonly _baseUrl: string,
    protected readonly _defaultOption: OptionFields<O>,
    protected _character: string | C = '',
    protected _document: Document = new JSDOM().window.document
  ) {}

  public async getCharacter(
    name: string | C,
    option: OptionFields<O> = {}
  ): Promise<I> {
    try {
      this._character = name;

      this._document = await getDom(this._baseUrl + this._character);

      const keys: O[] = [];

      const { only: only_default = [] } = this._defaultOption;

      const { exclude = [], only = [] } = option;

      if (only.length > 0) {
        keys.push(...only);
      } else if (exclude.length > 0) {
        const new_only = only_default.filter(
          value => exclude.indexOf(value) < 0
        );
        keys.push(...new_only);
      } else {
        keys.push(...only_default);
      }

      return this.toJson(keys);
    } catch (error) {
      throw new Error('The requested Character does not exist');
    }
  }

  protected abstract async toJson(keys: O[]): Promise<I>;
}
