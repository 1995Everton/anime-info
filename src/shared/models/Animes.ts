export interface Animes<C, O, I> {
  getCharacter(name: C | string, option?: O): Promise<I | null>;
}
