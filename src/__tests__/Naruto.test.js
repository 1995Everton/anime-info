import { JSDOM } from 'jsdom';
import { Naruto } from '..';
import { 
  itachi_json_pt_br,
  itachi_json_es
} from './json/naruto';

jest.setTimeout(50000);
describe('Global', () => {

  const naruto = new Naruto();

  function searchNames(document) {
    const list = [];
    const nameElement = document.querySelectorAll(
      '.category-page__members > ul > li > a'
    );
    nameElement.forEach(el => {
      list.push(el.textContent.replace(/\s/g, '_'));
    });
    return list;
  }
  
  async function getNames(urls, urlLang) {
    const character = [];
    const baseUrl = 'https://naruto.fandom.com/';
    const promises = urls.map(async url => {
      const dom = await JSDOM.fromURL(`${baseUrl + urlLang}?from=${url}`);
      const { document } = dom.window;
      character.push(...searchNames(document));
    });
  
    await Promise.all(promises);
    return character;
  }
  async function characterFandom() {
    const all_names_lang = {};
    const lang = [
      {
        name: 'portuguese',
        paginate: [
          '',
          'Ereki+Kaminarimon',
          'Ibiki+Morino',
          'Korega',
          'Natsu+Hyūga',
          'Shimon+Hijiri',
          'Torifu+Akimichi'
        ],
        base_url: 'pt-br/wiki/Categoria:Personagens'
      },
      {
        name: 'spanish',
        paginate: [
          '',
          'Dokku',
          'Hokushin',
          'Koji+Kashin',
          'Namida+Suzumeno',
          'Shikaku+Nara',
          'Tōka+Senju'
        ],
        base_url: 'es/wiki/Categoría:Personajes'
      }
    ]
    const promise = lang.map( ({name,paginate,base_url}) => 
      getNames(paginate,base_url).then( names => all_names_lang[name] = names))

    await Promise.all(promise);

    const { spanish, portuguese } = all_names_lang;

    const names = spanish.filter(value => portuguese.indexOf(value) >= 0);

    return names.sort();

  }

  test('Accessing invalid private method _toJson', async () => {
    const invalid = await naruto._toJson();
    expect(invalid).toEqual({});
  })

  test('Accessing invalid private method _weight', async () => {
    const invalid = await naruto._weight();
    expect(invalid).toEqual([]);
  })

  test('Check that the character list is up to date', async () => {
    const character = naruto.getListCharacters();
    const character_fandom = await characterFandom();
    expect(character).toEqual(character_fandom);
  })

  test('filter the character list', async () => {
    const character = naruto.getListCharacters('Uchiha');
    expect(character).toEqual(expect.arrayContaining([expect.stringMatching(/Uchiha/i)]));
  })

})

describe('PT-BR', () => {

  const naruto = new Naruto({
    lang: 'pt-br'
  });

  test('Return all properties for a given character', async () => {
    const itachi = await naruto.getCharacter('Itachi_Uchiha')
    expect(itachi).toEqual(itachi_json_pt_br);
  });

  test('Returns only the character name', async () => {
    const itachi = await naruto.getCharacter('Itachi_Uchiha', {
      only: ['name']
    });
    expect(itachi).toEqual({ name: 'Itachi Uchiha' });
  });

  test('Nonexistent character', async () => {
    try {
      await naruto.getCharacter('Goku');
      expect('The requested Character does not exist').toBe('OK');
    } catch (error) {
      expect(error.message).toBe('The requested Character does not exist');
    }
  });

  test('Exclude the character name in the JSON return', async () => {
    const itachi = await naruto.getCharacter('Itachi_Uchiha', {
      exclude: ['name']
    });
    expect(itachi).toEqual(expect.not.objectContaining({ name: 'Itachi Uchiha' }));
  });

});

describe('ES', () => {

  const naruto = new Naruto({
    lang: 'es'
  });

  test('Return all properties for a given character', async () => {
    const itachi = await naruto.getCharacter('Itachi_Uchiha')
    expect(itachi).toEqual(itachi_json_es);
  });

  test('Returns only the character name', async () => {
    const itachi = await naruto.getCharacter('Itachi_Uchiha', {
      only: ['name']
    });
    expect(itachi).toEqual({ name: 'Itachi Uchiha' });
  });

  test('Nonexistent character', async () => {
    try {
      await naruto.getCharacter('Goku');
      expect('The requested Character does not exist').toBe('OK');
    } catch (error) {
      expect(error.message).toBe('The requested Character does not exist');
    }
  });

  test('Exclude the character name in the JSON return', async () => {
    const itachi = await naruto.getCharacter('Itachi_Uchiha', {
      exclude: ['name']
    });
    expect(itachi).toEqual(expect.not.objectContaining({ name: 'Itachi Uchiha' }));
  });

});

describe('EN', () => {

  test('No English language support in Naruto anime', async () => {
    expect(() => new Naruto({ lang: 'en' })).toThrow('language not available');
  });

});
