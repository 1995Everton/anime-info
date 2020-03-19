import { Naruto } from '../';
import { Language } from '../app/shared/enums';
import { Characters } from '../app/naruto/enums';

test('Returns only the character name', async () => {
  const naruto = new Naruto({
    lang: Language.PT_BR
  });

  const itachi = await naruto.getCharacter(Characters.ItachiUchiha, {
    affiliation: false,
    age: false,
    birthday: false,
    clan: false,
    classification: false,
    debut: false,
    description: false,
    family: false,
    height: false,
    jutsu: false,
    kekkei_genkai: false,
    name: true,
    nature_type: false,
    ninja_rank: false,
    ninja_registration: false,
    occupation: false,
    partner: false,
    photo: false,
    quotes: false,
    sex: false,
    status: false,
    team: false,
    titles: false,
    tools: false,
    voices: false,
    weight: false
  });

  expect(itachi).toStrictEqual({ name: 'Itachi Uchiha' });
});
