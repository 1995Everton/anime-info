import { CharacterDom, NamesLang, Pages } from './CharacterDom';

const pages: Pages[] = [
  {
    name: 'portuguese',
    paginate: [
      '',
      '?from=Ereki+Kaminarimon',
      '?from=Ibara',
      '?from=Konohamaru+Sarutobi',
      '?from=Natori',
      '?from=Shimeji',
      '?from=Tonton'
    ],
    base_url: 'https://naruto.fandom.com/pt-br/wiki/Categoria:Personagens'
  },
  {
    name: 'spanish',
    paginate: [
      '',
      '?from=Dokku',
      '?from=Hokushin',
      '?from=Koji+Kashin',
      '?from=Namida+Suzumeno',
      '?from=Shikaku+Nara',
      '?from=Tōka+Senju'
    ],
    base_url: 'https://naruto.fandom.com/es/wiki/Categoría:Personajes'
  }
];

class NarutoCharacter extends CharacterDom {
  constructor() {
    super(pages);
  }

  protected filterNames(names_lang: NamesLang): string[] {
    const { spanish = [], portuguese = [] } = names_lang;

    const names = spanish.filter(value => portuguese.indexOf(value) >= 0);

    return names.sort();
  }
}

export const narutoCharacter = new NarutoCharacter();
