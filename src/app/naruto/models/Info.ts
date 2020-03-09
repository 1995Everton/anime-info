import { Debut } from "./Debut";
import { Voices } from "./Voices";
import { Affiliation } from "./Affiliation";
import { Clan } from "./Clan";
import { KekkeiGenkai } from "./KekkeiGenkai";

export interface Info {
    [key : string]: any
    sex?: string;
    photo?: string;
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
    debut?: Debut;
    voices?: Voices[];
    kekkei_genkai?:KekkeiGenkai[];
    affiliation?: Affiliation[];
    clan?: Clan[];
}

export enum TagsInfoPtBr {
    Name = ".page-header__title",
    Photo = ".pi-image-thumbnail",
    Titles = "[data-source='Nome'] > div > i",
    Age = "[data-source='IdadeI'] > div",
    Height = "[data-source='AlturaI'] > div",
    Weight = "[data-source='PesoI'] > div",
    Classification = "[data-source='Classificação'] > div > a",
    Team = "[data-source='Times'] > div > a",
    Partner = "[data-source='Parceiro'] > div > a",
    Occupation = "[data-source='Ocupação'] > div > a",
    NinjaRank = "[data-source='Patente NinjaI'] > div > a",
    NinjaRegistration = "[data-source='Registro Ninja'] > div",
    Birthday = "[data-source=Aniversário] > div",
    Status = "[data-source=Estado] > div",
    Sex = "[data-source=Sexo] > div > a:nth-child(2)"
}

export enum TagsInfoEn {
    Name = ".page-header__title",
    Photo = ".pi-image-thumbnail",
    Titles = "",
    Age = "",
    Height = "",
    Weight = "",
    Classification = "",
    Team = "",
    Partner = "",
    Occupation = "",
    NinjaRank = "",
    NinjaRegistration = "",
    Birthday = ".infobox tbody tr:nth-child(16) > td",
    Status = ".infobox tbody tr:nth-child(19) > td",
    Sex = ".infobox tbody tr:nth-child(17) > td"
}

export enum TagsInfoEs {
    Name = ".page-header__title",
    Photo = ".pi-image-thumbnail",
    Titles = "[data-source='Sobrenombre'] > div > i",
    Age = "[data-source='Edad'] > div",
    Height = "[data-source='Altura'] > div",
    Weight = "[data-source='Peso'] > div",
    Classification = "[data-source='Clasificacion'] > div > a",
    Team = "[data-source='Equipo'] > div > a",
    Partner = "[data-source='Compañero'] > div > a",
    Occupation = "[data-source='Ocupacion'] div > a",
    NinjaRank = "[data-source='Rango'] div > a",
    NinjaRegistration = "[data-source='Registro'] > div",
    Birthday = "[data-source=Nacimiento] > div",
    Status = "[data-source=Nacimiento] ~ div:nth-of-type(3) > div",
    Sex = "[data-source=Nacimiento] ~ div:nth-of-type(2) > div > a:nth-child(2)"
}
