export interface Debut {
    manga: string | null;
    anime: string | null;
    movie: string | null;
    novel: string | null;
    game: string | null;
    ova: string | null;
}

export enum TagsDebutPtBr {
    Manga = "[data-source=Mangá] > div > a",
    Anime = "[data-source=Anime] > div",
    Novel = "[data-source=Novela] > div",
    Movie = "[data-source=Filme] > div > i > a",
    Game = "[data-source=Game] > div > i > a",
    Ova = "[data-source=Ova] > div > i > a"
}

export enum TagsDebutEn {
    Manga = ".infobox tbody tr:nth-child(5) > td",
    Anime = ".infobox tbody tr:nth-child(6) > td",
    Novel = ".infobox tbody tr:nth-child(7) > td",
    Movie = ".infobox tbody tr:nth-child(8) > td",
    Game = ".infobox tbody tr:nth-child(9) > td",
    Ova = ".infobox tbody tr:nth-child(10) > td"
}

export enum TagsDebutEs {
    Manga = "[data-source=Debutmanga] > div > a",
    Anime = "[data-source=Debutanime] > div > a",
    Novel = "[data-source=Debutnovela] > div > a",
    Movie = "[data-source=Debutpelicula] > div > a",
    Game = "[data-source=Debutjuego] > div > a",
    Ova = "[data-source=Debutova] > div > a"
}
