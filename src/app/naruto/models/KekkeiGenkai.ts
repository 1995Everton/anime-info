import { genericPhoto } from "../../shared/models/GenericsPhoto";

export interface KekkeiGenkai extends genericPhoto{}

export enum TagsKekkeiGenkaiPtBr {
    List = "[data-source='Kekkei Genkai'] > div > a"
}

export enum TagsKekkeiGenkaiEn {
    List = ""
}

export enum TagsKekkeiGenkaiEs {
    List = "[data-source='Kekkeigenkai'] > div > a"
}
