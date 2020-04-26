import { Naruto } from '..';
import { narutoCharacter } from './services';
import { 
  itachi_json_pt_br,
  itachi_json_es
} from './json/naruto';

jest.setTimeout(50000);
describe('Global', () => {

  const naruto = new Naruto();

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
    const character_fandom = await narutoCharacter.getCharacterFandom();
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
