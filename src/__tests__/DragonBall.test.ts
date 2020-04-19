import { DragonBall, CharactersDragonBall, Language } from '../';

test('Returns only the Dragon Ball character name', async () => {
  const dragon_ball = new DragonBall({
    lang: Language.PT_BR
  });

  const goku = await dragon_ball.getCharacter(CharactersDragonBall.Goku, {
    only: ['name']
  });

  expect(goku).toEqual(expect.objectContaining({ name: 'Goku' }));
});
