import { Debut } from "./Debut";
import { Voices } from "./Voices";
import { Affiliation } from "./Affiliation";
import { Clan } from "./Clan";
import { KekkeiGenkai } from "./KekkeiGenkai";
import { GenericPhoto } from "../../shared/models/GenericsPhoto";
import { NatureType } from "./NatureType";
import { Photos } from "./Photos";
import { Quotes } from "./Quotes";

export interface Info {
    [key : string]: any
    sex?: string;
    description?: string;
    photo?: Photos[];
    titles?: string[];
    name?: string;
    birthday?: string;
    status?: string;
    age?: string[];
    height?: string[];
    weight?: string[];
    classification?: string[];
    team?: string[];
    partner?: string[];
    occupation?: string[];
    ninja_rank?: string[];
    ninja_registration?: string;
    family?: string[];
    jutsu?: (string | GenericPhoto)[];
    nature_type?: NatureType[];
    tools?: (string | GenericPhoto)[];
    quotes?: (string | null |Quotes)[]
    debut?: Debut;
    voices?: Voices[];
    kekkei_genkai?:KekkeiGenkai[];
    affiliation?: Affiliation[];
    clan?: Clan[];
}
