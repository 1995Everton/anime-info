import { OnePunchMan } from '..';
import { onePunchManCharacter } from './services';
import { saitama_json_es, saitama_json_en } from './json/onepunchman';


jest.setTimeout(50000);
describe('Global', () => {

    const one_punch_man = new OnePunchMan();

    test('Accessing invalid private method', async () => {
        const invalid = await one_punch_man._toJson();
        expect(invalid).toEqual({});
      })
    
    test('Check that the character list is up to date', async () => {
    const character = one_punch_man.getListCharacters();
    const character_fandom = await onePunchManCharacter.getCharacterFandom()
    expect(character).toEqual(character_fandom);
    })

    test('filter the character list', async () => {
    const character = one_punch_man.getListCharacters('Tanktop');
    expect(character).toEqual(expect.arrayContaining([expect.stringMatching(/Tanktop/i)]));
    })

})

describe('PT-BR', () => {

    test('No Portuguese language support in One Punch Man anime', async () => {
      expect(() => new OnePunchMan({ lang: 'pt-br' })).toThrow('language not available');
    });
  
});

describe('ES', () => {

    const one_punch_man = new OnePunchMan({
      lang: 'es'
    });
  
    test('Return all properties for a given character', async () => {
      const saitama = await one_punch_man.getCharacter('Saitama',{
          exclude: [
              "gallery"
          ]
      })
      expect(saitama).toEqual(saitama_json_es);
    });
  
    test('Returns only the character name', async () => {
      const saitama = await one_punch_man.getCharacter('Saitama', {
        only: ['name']
      });
      expect(saitama).toEqual({ name: 'Saitama' });
    });
  
    test('Nonexistent character', async () => {
      try {
        await one_punch_man.getCharacter('Goku');
        expect('The requested Character does not exist').toBe('OK');
      } catch (error) {
        expect(error.message).toBe('The requested Character does not exist');
      }
    });
  
    test('Exclude the character name in the JSON return', async () => {
      const saitama = await one_punch_man.getCharacter('Saitama', {
        exclude: ['name']
      });
      expect(saitama).toEqual(expect.not.objectContaining({ name: 'Saitama' }));
    });
  
});

describe('EN', () => {

    const one_punch_man = new OnePunchMan({
      lang: 'en'
    });
  
    test('Return all properties for a given character', async () => {
      const saitama = await one_punch_man.getCharacter('Saitama',{
          exclude: [
              "gallery"
          ]
      })
      expect(saitama).toEqual(saitama_json_en);
    });
  
    test('Returns only the character name', async () => {
      const saitama = await one_punch_man.getCharacter('Saitama', {
        only: ['name']
      });
      expect(saitama).toEqual({ name: 'Saitama' });
    });
  
    test('Nonexistent character', async () => {
      try {
        await one_punch_man.getCharacter('Goku');
        expect('The requested Character does not exist').toBe('OK');
      } catch (error) {
        expect(error.message).toBe('The requested Character does not exist');
      }
    });
  
    test('Exclude the character name in the JSON return', async () => {
      const saitama = await one_punch_man.getCharacter('Saitama', {
        exclude: ['name']
      });
      expect(saitama).toEqual(expect.not.objectContaining({ name: 'Saitama' }));
    });
  
});