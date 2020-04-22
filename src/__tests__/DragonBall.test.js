import { DragonBall } from '..';
import {
  vegeta_json_pt_br,
  vegeta_json_es,
  vegeta_json_en
} from './json/dragonball';

describe('Global', () => {

  const dragon_ball = new DragonBall();

  test('Accessing invalid private method', async () => {
    const invalid = await dragon_ball._toJson();
    expect(invalid).toEqual({});
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
