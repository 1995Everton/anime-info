import { JSDOM } from 'jsdom';

export interface NamesLang {
  portuguese?: string[];
  english?: string[];
  spanish?: string[];
}

export interface Pages {
  name: 'portuguese' | 'english' | 'spanish';
  paginate: string[];
  base_url: string;
}

export abstract class CharacterDom {
  constructor(
    private pages: Pages[],
    protected document = new JSDOM().window.document
  ) {}

  private searchNames(): string[] {
    const list: string[] = [];
    const nameElement = this.document.querySelectorAll(
      '.category-page__members > ul > li > a'
    );
    if (nameElement.length > 0) {
      nameElement.forEach(el => {
        const title = el.getAttribute('title');
        if (title && list.indexOf(title.replace(/\s/g, '_')) === -1) {
          list.push(title.replace(/\s/g, '_'));
        }
      });
    } else {
      return this.customSearch();
    }

    return list;
  }

  private async getNames(urls: string[], baseUrl: string): Promise<string[]> {
    const character: string[] = [];
    const promises = urls.map(async url => {
      try {
        this.document = await JSDOM.fromURL(baseUrl + url).then(
          dom => dom.window.document
        );
        character.push(...this.searchNames());
      } catch (error) {
        console.log(baseUrl + url);
      }
    });

    await Promise.all(promises);
    return character;
  }

  public async getCharacterFandom(): Promise<string[]> {
    const names_lang: NamesLang = {};
    const promise = this.pages.map(({ name, paginate, base_url }) =>
      this.getNames(paginate, base_url).then(names => {
        names_lang[name] = names;
      })
    );

    await Promise.all(promise);

    return this.filterNames(names_lang);
  }

  protected abstract filterNames(names_lang: NamesLang): string[];

  protected abstract customSearch(): string[];
}
