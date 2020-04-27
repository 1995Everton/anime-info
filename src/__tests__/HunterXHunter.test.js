import { HunterXHunter } from '..';
import { hunterXHunterCharacter } from './services';
import { 
    gon_json_en,
    gon_json_es,
    killua_json_en,
    killua_json_es,
    kurapika_json_en,
    kurapika_json_es
 } from './json/hunterxhunter';


jest.setTimeout(50000);
describe('Global', () => {

    const hunter_x_hunter = new HunterXHunter();

    test('Accessing invalid private method', async () => {
        const invalid = await hunter_x_hunter._toJson();
        expect(invalid).toEqual({});
      })
    
    test('Check that the character list is up to date', async () => {
    const character = hunter_x_hunter.getListCharacters();
    const character_fandom = await hunterXHunterCharacter.getCharacterFandom()
    expect(character).toEqual(character_fandom);
    })

    test('filter the character list', async () => {
    const character = hunter_x_hunter.getListCharacters('Zoldyck');
    expect(character).toEqual(expect.arrayContaining([expect.stringMatching(/Zoldyck/i)]));
    })

})

describe('PT-BR', () => {

    test('No Portuguese language support in Hunter X Hunter anime', async () => {
      expect(() => new HunterXHunter({ lang: 'pt-br' })).toThrow('language not available');
    });
  
});

describe('ES', () => {

    const hunter_x_hunter = new HunterXHunter({
      lang: 'es'
    });
  
    test('Return all properties for a given character', async () => {
      const gon = await hunter_x_hunter.getCharacter('Gon_Freecss')
      expect(gon).toEqual(gon_json_es);
    });

    test('Return all properties for a given character', async () => {
        const killua = await hunter_x_hunter.getCharacter('Killua_Zoldyck')
        expect(killua).toEqual(killua_json_es);
    });

    test('Return all properties for a given character', async () => {
        const kurapika = await hunter_x_hunter.getCharacter('Kurapika')
        expect(kurapika).toEqual(kurapika_json_es);
    });
  
    test('Returns only the character name', async () => {
      const gon = await hunter_x_hunter.getCharacter('Gon_Freecss', {
        only: ['name']
      });
      expect(gon).toEqual({ name: 'Gon Freecss' });
    });
  
    test('Nonexistent character', async () => {
      try {
        await hunter_x_hunter.getCharacter('Goku');
        expect('The requested Character does not exist').toBe('OK');
      } catch (error) {
        expect(error.message).toBe('The requested Character does not exist');
      }
    });
  
    test('Exclude the character name in the JSON return', async () => {
      const gon = await hunter_x_hunter.getCharacter('Gon_Freecss', {
        exclude: ['name']
      });
      expect(gon).toEqual(expect.not.objectContaining({ name: 'Gon Freecss' }));
    });
  
});

describe('EN', () => {

    const hunter_x_hunter = new HunterXHunter({
        lang: 'en'
      });
    
      test('Return all properties for a given character', async () => {
        const gon = await hunter_x_hunter.getCharacter('Gon_Freecss')
        expect(gon).toEqual(gon_json_en);
      });
  
      test('Return all properties for a given character', async () => {
          const killua = await hunter_x_hunter.getCharacter('Killua_Zoldyck')
          expect(killua).toEqual(killua_json_en);
      });
  
      test('Return all properties for a given character', async () => {
          const kurapika = await hunter_x_hunter.getCharacter('Kurapika')
          expect(kurapika).toEqual(kurapika_json_en);
      });
    
      test('Returns only the character name', async () => {
        const gon = await hunter_x_hunter.getCharacter('Gon_Freecss', {
          only: ['name']
        });
        expect(gon).toEqual({ name: 'Gon Freecss' });
      });
    
      test('Nonexistent character', async () => {
        try {
          await hunter_x_hunter.getCharacter('Goku');
          expect('The requested Character does not exist').toBe('OK');
        } catch (error) {
          expect(error.message).toBe('The requested Character does not exist');
        }
      });
    
      test('Exclude the character name in the JSON return', async () => {
        const gon = await hunter_x_hunter.getCharacter('Gon_Freecss', {
          exclude: ['name']
        });
        expect(gon).toEqual(expect.not.objectContaining({ name: 'Gon Freecss' }));
      });
  
});