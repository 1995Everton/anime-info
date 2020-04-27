import { Naruto, DragonBall, OnePunchMan, HunterXHunter } from '../src';

async function getCharacterNaruto() {
  const naruto = new Naruto({
    lang: 'pt-br'
  });
  const character = await naruto.getCharacter('Ibara', {});
  console.log(character);
}

async function getCharacterDragonBall() {
  const dragon_ball = new DragonBall({
    lang: 'pt-br'
  });
  const character = await dragon_ball.getCharacter('Vegeta', {});
  console.log(character);
}

async function getCharacterOnePunchMan() {
  const one_punch_man = new OnePunchMan({
    lang: 'en'
  });
  const character = await one_punch_man.getCharacter('Saitama', {
    exclude: ['gallery']
  });
  console.log(character);
}

async function getCharacterHunterXHunter() {
  const hunter_x_hunter = new HunterXHunter({
    lang: 'es'
  });
  const character = await hunter_x_hunter.getCharacter('Kurapika');
  console.log(character);
}

// getCharacterNaruto();
// getCharacterDragonBall();
// getCharacterOnePunchMan();
getCharacterHunterXHunter();
