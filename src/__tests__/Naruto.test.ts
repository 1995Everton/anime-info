import { Naruto, CharactersNaruto, Language } from '../';

test('Returns only the Naruto character name', async () => {
  const naruto = new Naruto({
    lang: Language.PT_BR
  });

  const itachi = await naruto.getCharacter(CharactersNaruto.ItachiUchiha, {
    only: ['name']
  });

  expect(itachi).toEqual(expect.objectContaining({ name: 'Itachi Uchiha' }));
});
