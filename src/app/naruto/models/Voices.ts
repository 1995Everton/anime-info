export interface Voices{
    name: string | null,
    country: string | null
}

export enum TagsVoicesPtBr {
    Name = "[data-source=Japonês] > div|[data-source=Português] > div",
    Country = "[data-source=Japonês] > h3 > small > b|[data-source=Português] > h3 > small > b"
}

export enum TagsVoicesEn {
    Name = ".infobox tbody tr:nth-child(13) > td|.infobox tbody tr:nth-child(14) > td",
    Country = ".infobox tbody tr:nth-child(13) > th|.infobox tbody tr:nth-child(14) > th"
}

export enum TagsVoicesEs {
    Name = "[data-source=Seiyū] > div|[data-source=Españollatino] > div|[data-source=Españolespaña] > div",
    Country = "[data-source=Seiyū] > h3|[data-source=Españollatino] > h3|[data-source=Españolespaña] > h3"
}