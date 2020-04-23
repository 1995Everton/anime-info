import { JSDOM } from 'jsdom';
import { DragonBall } from '..';
import {
  vegeta_json_pt_br,
  vegeta_json_es,
  vegeta_json_en
} from './json/dragonball';

jest.setTimeout(50000);
describe('Global', () => {

  const dragon_ball = new DragonBall();

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
  
  async function getNames(urls, baseUrl) {
    const character = [];
    const promises = urls.map(async url => {
      const dom = await JSDOM.fromURL(`${baseUrl}?from=${url}`);
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
          'Gohanks+Xeno', 
          'Peru'
        ],
        base_url: 'https://dragonball.fandom.com/pt-br/wiki/Categoria:Personagens'
      },
      {
        name: 'english',
        paginate: [
          '',
          'Chapp',
          'Froze',
          'Hijiki',
          'Mamba',
          'Oonaan',
          'Shale',
          'Vegeta+Jr.'
        ],
        base_url: 'https://dragonball.fandom.com/wiki/Category:Characters'
      }
    ]
    const promise = lang.map( ({name,paginate,base_url}) => 
      getNames(paginate,base_url).then( names => all_names_lang[name] = names))

    await Promise.all(promise);

    const { english, portuguese } = all_names_lang;

    const names = english.filter(value => portuguese.indexOf(value) >= 0);

    return names.sort();

  }

  test('Accessing invalid private method', async () => {
    const invalid = await dragon_ball._toJson();
    expect(invalid).toEqual({});
  })

  test('Check that the character list is up to date', async () => {
    const character = dragon_ball.getListCharacters();
    const character_fandom = await characterFandom();
    expect(character).toEqual(character_fandom);
  })

  test('filter the character list', async () => {
    const character = dragon_ball.getListCharacters('Dr');
    expect(character).toEqual(expect.arrayContaining([expect.stringMatching(/Dr/i)]));
  })

})

describe('PT-BR', () => {

  const dragon_ball = new DragonBall({
    lang: 'pt-br'
  });

  test('Return all properties for a given character', async () => {
    const vegeta = await dragon_ball.getCharacter('Vegeta')
    expect(vegeta).toEqual(vegeta_json_pt_br);
  });

  test('Returns only the character name', async () => {
    const majin_boo = await dragon_ball.getCharacter('Majin_Boo', {
      only: ['name']
    });
    expect(majin_boo).toEqual(expect.objectContaining({ name: 'Majin Boo' }));
  });

  test('Nonexistent character', async () => {
    try {
      await dragon_ball.getCharacter('Naruto');
      expect('The requested Character does not exist').toBe('OK');
    } catch (error) {
      expect(error.message).toBe('The requested Character does not exist');
    }
  });

  test('Exclude the character name in the JSON return', async () => {
    const majin_boo = await dragon_ball.getCharacter('Majin_Boo', {
      exclude: ['name']
    });
    expect(majin_boo).toEqual(expect.not.objectContaining({ name: 'Majin Boo' }));
  });

});

describe('ES', () => {

  const dragon_ball = new DragonBall({
    lang: 'es'
  });

  test('Return all properties for a given character', async () => {
    const vegeta = await dragon_ball.getCharacter('Vegeta')
    expect(vegeta).toEqual(vegeta_json_es);
  });

  test('Returns only the Dragon Ball character name', async () => {
    const vegeta = await dragon_ball.getCharacter('Vegeta', {
      only: ['name']
    });
    expect(vegeta).toEqual(expect.objectContaining({ name: 'Vegeta' }));
  });

  test('Nonexistent character', async () => {
    try {
      await dragon_ball.getCharacter('Naruto');
      expect('The requested Character does not exist').toBe('OK');
    } catch (error) {
      expect(error.message).toBe('The requested Character does not exist');
    }
  });

  test('Exclude the character name in the JSON return', async () => {
    const vegeta = await dragon_ball.getCharacter('Vegeta', {
      exclude: ['name']
    });
    expect(vegeta).toEqual(expect.not.objectContaining({ name: 'Vegeta' }));
  });

});

describe('EN', () => {

  const dragon_ball = new DragonBall({
    lang: 'en'
  });

  test('Return all properties for a given character', async () => {
    const vegeta = await dragon_ball.getCharacter('Vegeta')
    expect(vegeta).toEqual(vegeta_json_en);
  });

  test('Returns only the Dragon Ball character name', async () => {
    const majin_boo = await dragon_ball.getCharacter('Majin_Boo', {
      only: ['name']
    });
    expect(majin_boo).toEqual(expect.objectContaining({ name: 'Majin Buu' }));
  });

  test('Nonexistent character', async () => {
    try {
      await dragon_ball.getCharacter('Naruto');
      expect('The requested Character does not exist').toBe('OK');
    } catch (error) {
      expect(error.message).toBe('The requested Character does not exist');
    }
  });

  test('Exclude the character name in the JSON return', async () => {
    const majin_boo = await dragon_ball.getCharacter('Majin_Boo', {
      exclude: ['name']
    });
    expect(majin_boo).toEqual(expect.not.objectContaining({ name: 'Majin Boo' }));
  });

});
