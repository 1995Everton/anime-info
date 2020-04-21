import { Naruto, DragonBall } from '../src';

async function getCharacterNaruto() {
  const naruto = new Naruto({
    lang: 'pt-br'
  });
  const character = await naruto.getCharacter('Temari', {
    exclude: ['name']
  });
  console.log(character);
}

async function getCharacterDragonBall() {
  const dragon_ball = new DragonBall({
    lang: 'pt-br'
  });
  const character = await dragon_ball.getCharacter('Goku', {
    exclude: ['name', 'birthday']
  });
  console.log(character);
}

getCharacterDragonBall();
