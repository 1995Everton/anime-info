import { genericPhoto } from "../../shared/models/GenericsPhoto";

export interface Affiliation extends genericPhoto {}

export enum TagsAffiliationPtBr {
    List = "[data-source='Afiliação'] > div > a"
}

export enum TagsAffiliationEn {
    List = ""
}

export enum TagsAffiliationEs {
    List = "[data-source='Afiliacion'] > div > a"
}
