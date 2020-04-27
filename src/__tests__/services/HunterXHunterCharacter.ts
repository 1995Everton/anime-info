import { CharacterDom, NamesLang, Pages } from './CharacterDom';

const pages: Pages[] = [
  // {
  //   name: 'portuguese',
  //   paginate: [''],
  //   base_url: 'https://hunter-x-hunter.fandom.com/pt/wiki/Categoria:Personagens'
  // },
  {
    name: 'spanish',
    paginate: [
      ':Cazadores_y_Licencia',
      ':Hormigas_Quimera',
      ':Miembros_de_la_Brigada_Fantasma'
    ],
    base_url: 'https://hunterxhunter.fandom.com/es/wiki/Categoría'
  },
  {
    name: 'english',
    paginate: [''],
    base_url:
      'https://hunterxhunter.fandom.com/wiki/List_of_Hunter_×_Hunter_Characters'
  }
];

class HunterXHunterCharacter extends CharacterDom {
  constructor() {
    super(pages);
  }

  protected filterNames(names_lang: NamesLang): string[] {
    const { english = [], spanish = [] } = names_lang;

    const names = english.filter(value => spanish.indexOf(value) >= 0);

    return names.sort();
  }

  protected customSearch(): string[] {
    const list: string[] = [];
    const nameElementEn = this.document.querySelectorAll(
      '#mw-content-text > table > tbody .image-thumbnail'
    );
    nameElementEn.forEach(el => {
      const title = el.getAttribute('title');
      if (title && list.indexOf(title.replace(/\s/g, '_')) === -1) {
        list.push(title.replace(/\s/g, '_'));
      }
    });
    return list;
  }
}

export const hunterXHunterCharacter = new HunterXHunterCharacter();
