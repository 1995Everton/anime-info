import { genericPhoto } from "../../shared/models/GenericsPhoto";

export interface Clan extends genericPhoto{}

export enum TagsClanPtBr {
    List = "[data-source='Clã'] > div > a"
}

export enum TagsClanEn {
    List = ""
}

export enum TagsClanEs {
    List = "[data-source='Clan'] > div > a"
}
