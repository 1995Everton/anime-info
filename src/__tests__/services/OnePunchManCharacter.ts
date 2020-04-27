import { CharacterDom, NamesLang, Pages } from './CharacterDom';

const pages: Pages[] = [
  {
    name: 'spanish',
    paginate: [':Héroes', ':Kaijins', ':Villanos'],
    base_url: 'https://onepunchman.fandom.com/es/wiki/Categoría'
  },
  {
    name: 'english',
    paginate: ['Heroes', 'Villains', 'Others', 'Mysterious_Beings'],
    base_url: 'https://onepunchman.fandom.com/wiki/'
  }
];

class OnePunchManCharacter extends CharacterDom {
  constructor() {
    super(pages);
  }

  private getTableValues(element: NodeListOf<Element>): string[] {
    const list: string[] = [];
    element.forEach(el => {
      const titleRelatives = el.querySelector('span > b');
      if (titleRelatives && titleRelatives.textContent) {
        list.push(
          titleRelatives.textContent
            .replace(/\s/g, '_')
            .replace('(', '')
            .replace(')', '')
        );
      } else {
        const titleEl = el.querySelector('b > a');
        if (titleEl) {
          const title = titleEl.getAttribute('title');
          if (title) {
            list.push(title.replace(/\s/g, '_'));
          }
        }
      }
    });
    return list;
  }

  protected customSearch(): string[] {
    const list: string[] = [];
    const nameElementEn = this.document.querySelectorAll(
      '#mw-content-text > div > table table tbody > tr:nth-child(2) center > big'
    );
    if (nameElementEn.length > 0) {
      list.push(...this.getTableValues(nameElementEn));
    } else {
      const monsterEn = this.document.querySelectorAll(
        '.tabber > .tabbertab > table table tbody > tr:nth-child(2) center > big'
      );
      list.push(...this.getTableValues(monsterEn));
    }
    return list;
  }

  protected filterNames(names_lang: NamesLang): string[] {
    const { spanish = [], english = [] } = names_lang;

    const names = english.filter(value => spanish.indexOf(value) >= 0);

    return names.sort();
  }
}

export const onePunchManCharacter = new OnePunchManCharacter();
