import {
  Naruto,
  DragonBall,
  Language,
  CharactersNaruto,
  CharactersDragonBall
} from '../src';

async function getCharacterNaruto() {
  const naruto = new Naruto({
    lang: Language.PT_BR
  });
  const character = await naruto.getCharacter(CharactersNaruto.ItachiUchiha);
  console.log(character);
}

async function getCharacterDragonBall() {
  const dragon_ball = new DragonBall({
    lang: Language.PT_BR
  });
  const character = await dragon_ball.getCharacter(CharactersDragonBall.Goku);
  console.log(character);
}

getCharacterDragonBall();
