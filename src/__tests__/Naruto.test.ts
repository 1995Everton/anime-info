import { Naruto } from '../';

test('PT-BR : Returns only the Naruto character name', async () => {
  const naruto = new Naruto({
    lang: 'pt-br'
  });

  const itachi = await naruto.getCharacter('Itachi_Uchiha', {
    only: ['name']
  });

  expect(itachi).toEqual(expect.objectContaining({ name: 'Itachi Uchiha' }));
});

test('ES : Returns only the Naruto character name', async () => {
  const naruto = new Naruto({
    lang: 'es'
  });

  const itachi = await naruto.getCharacter('Itachi_Uchiha', {
    only: ['name']
  });

  expect(itachi).toEqual(expect.objectContaining({ name: 'Itachi Uchiha' }));
});
