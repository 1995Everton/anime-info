import { DragonBall } from '../';

test('PT-BR : Returns only the Dragon Ball character name', async () => {
  const dragon_ball = new DragonBall({
    lang: 'pt-br'
  });

  const goku = await dragon_ball.getCharacter('Majin_Boo', {
    only: ['name']
  });

  expect(goku).toEqual(expect.objectContaining({ name: 'Majin Boo' }));
});

test('ES : Returns only the Dragon Ball character name', async () => {
  const dragon_ball = new DragonBall({
    lang: 'es'
  });

  const goku = await dragon_ball.getCharacter('Vegeta', {
    only: ['name']
  });

  expect(goku).toEqual(expect.objectContaining({ name: 'Vegeta' }));
});

test('EN : Returns only the Dragon Ball character name', async () => {
  const dragon_ball = new DragonBall({
    lang: 'en'
  });

  const goku = await dragon_ball.getCharacter('Majin_Boo', {
    only: ['name']
  });

  expect(goku).toEqual(expect.objectContaining({ name: 'Majin Buu' }));
});
