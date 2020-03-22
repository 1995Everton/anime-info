import { Naruto, CharactersNaruto } from '../naruto';
import { Language } from '../shared/enums';

test('Returns only the Naruto character name', async () => {
  const naruto = new Naruto({
    lang: Language.PT_BR
  });

  const itachi = await naruto.getCharacter(CharactersNaruto.ItachiUchiha, {
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
