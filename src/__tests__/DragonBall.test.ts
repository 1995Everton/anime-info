import { DragonBall, CharactersDragonBall } from '../dragonball';
import { Language } from '../shared/enums';

test('Returns only the Dragon Ball character name', async () => {
  const dragon_ball = new DragonBall({
    lang: Language.PT_BR
  });

  const goku = await dragon_ball.getCharacter(CharactersDragonBall.Goku, {
    address: false,
    alias: false,
    appears: false,
    birthday: false,
    death: false,
    description: false,
    height: false,
    occupation: false,
    photo: false,
    race: false,
    relatives: false,
    sex: false,
    transformation: false,
    weight: false
  });

  expect(goku).toStrictEqual({ name: 'Goku' });
});
