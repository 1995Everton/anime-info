import { CharacterDom, NamesLang, Pages } from './CharacterDom';

const pages: Pages[] = [
  {
    name: 'portuguese',
    paginate: ['', '?from=Gohanks+Xeno', '?from=Peru'],
    base_url: 'https://dragonball.fandom.com/pt-br/wiki/Categoria:Personagens'
  },
  {
    name: 'english',
    paginate: [
      '',
      '?from=Chapp',
      '?from=Froze',
      '?from=Hijiki',
      '?from=Mamba',
      '?from=Oonaan',
      '?from=Shale',
      '?from=Vegeta'
    ],
    base_url: 'https://dragonball.fandom.com/wiki/Category:Characters'
  }
];

class DragonBallCharacter extends CharacterDom {
  constructor() {
    super(pages);
  }

  protected filterNames(names_lang: NamesLang): string[] {
    const { english = [], portuguese = [] } = names_lang;

    const names = english.filter(value => portuguese.indexOf(value) >= 0);

    return names.sort();
  }
}

export const dragonBallCharacter = new DragonBallCharacter();
