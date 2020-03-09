import { getDom, $Query, getInnerHTML, stripHTML, removeSpacesString, getNameAndImage, getImage, getTextContent, getAndRemoveTagBr, getListElement } from "../utils/elements.dom";
import { Info, TagsInfoPtBr, TagsInfoEn, TagsInfoEs } from "./models/Info";
import { Characters } from "./enums/characters.enum";
import { Debut, TagsDebutPtBr, TagsDebutEn, TagsDebutEs } from "./models/Debut";
import { Tags } from "./models/Tags";
import { getFunctionFactory, getKeyValue } from "../utils/helper";
import { Language } from "../shared/enums/Language.enum";
import { Config } from "../shared/models/Config";
import { OptionFields, defaultOption } from "./models/OptionFields";
import { TagsVoicesPtBr, TagsVoicesEn, TagsVoicesEs, Voices } from "./models/Voices";
import { TagsKekkeiGenkaiPtBr, TagsKekkeiGenkaiEn, TagsKekkeiGenkaiEs, KekkeiGenkai } from "./models/KekkeiGenkai";
import { TagsAffiliationPtBr, TagsAffiliationEn, Affiliation, TagsAffiliationEs } from "./models/Affiliation";
import { Clan, TagsClanEs, TagsClanPtBr } from "./models/Clan";

export class Naruto {

    private _tags: Tags;

    private _baseUrl = 'https://naruto.fandom.com/###wiki/';

    constructor(config: Config = { lang : Language.PT_BR }){
        
        this._tags = this._getTags(config.lang);
    }

    private _getTags(lang: Language): Tags {
        switch (lang) {
            case Language.PT_BR:
                this._baseUrl = this._baseUrl.replace('###','pt-br/')
                return {
                    name: TagsInfoPtBr.Name,
                    photo: TagsInfoPtBr.Photo,
                    titles: TagsInfoPtBr.Titles,
                    birthday : TagsInfoPtBr.Birthday,
                    status: TagsInfoPtBr.Status,
                    age: TagsInfoPtBr.Age,
                    height: TagsInfoPtBr.Height,
                    weight: TagsInfoPtBr.Weight,
                    classification: TagsInfoPtBr.Classification,
                    team: TagsInfoPtBr.Team,
                    partner: TagsInfoPtBr.Partner,
                    occupation: TagsInfoPtBr.Occupation,
                    ninja_rank: TagsInfoPtBr.NinjaRank,
                    ninja_registration: TagsInfoPtBr.NinjaRegistration,
                    sex: TagsInfoPtBr.Sex,
                    kekkei_genkai: TagsKekkeiGenkaiPtBr.List,
                    affiliation: TagsAffiliationPtBr.List,
                    clan: TagsClanPtBr.List,
                    anime: TagsDebutPtBr.Anime,
                    game: TagsDebutPtBr.Game,
                    manga: TagsDebutPtBr.Manga,
                    movie: TagsDebutPtBr.Movie,
                    novel: TagsDebutPtBr.Novel,
                    ova: TagsDebutPtBr.Ova,
                    voices: {
                        name: TagsVoicesPtBr.Name,
                        country: TagsVoicesPtBr.Country
                    }
                };
            case Language.ES:
                this._baseUrl = this._baseUrl.replace('###','es/')
                return {
                    name: TagsInfoEs.Name,
                    photo: TagsInfoEs.Photo,
                    titles: TagsInfoEs.Titles,
                    birthday : TagsInfoEs.Birthday,
                    status: TagsInfoEs.Status,
                    age: TagsInfoEs.Age,
                    sex: TagsInfoEs.Sex,
                    height: TagsInfoEs.Height,
                    weight: TagsInfoEs.Weight,
                    classification: TagsInfoEs.Classification,
                    team: TagsInfoEs.Team,
                    partner: TagsInfoEs.Partner,
                    occupation: TagsInfoEs.Occupation,
                    ninja_rank: TagsInfoEs.NinjaRank,
                    ninja_registration: TagsInfoEs.NinjaRegistration,
                    kekkei_genkai: TagsKekkeiGenkaiEs.List,
                    affiliation: TagsAffiliationEs.List,
                    clan: TagsClanEs.List,
                    anime: TagsDebutEs.Anime,
                    game: TagsDebutEs.Game,
                    manga: TagsDebutEs.Manga,
                    movie: TagsDebutEs.Movie,
                    novel: TagsDebutEs.Novel,
                    ova: TagsDebutEs.Ova,
                    voices: {
                        name: TagsVoicesEs.Name,
                        country: TagsVoicesEs.Country
                    }
                };
            case Language.EN:
            default:
                throw new Error("language not available");
            
        }
    }

    public async getCharacter(name: Characters | string, option?: OptionFields): Promise<Info | null> {
        
        try {

            const document = await getDom(this._baseUrl + name);

            const options = Object.assign(defaultOption,option);

            const keys =  Object.keys(options);

            let info: Info = {};

            for (const key of keys) {
                if(getKeyValue(options,key)){
                    info[key] = getFunctionFactory(this,document,"_" + key)
                }
            }

            return info;

        }catch(error){
            console.log(error)
            throw new Error("The requested Character does not exist");
        }
    }

    private _debut = (document: Document): Debut => {
        return {
            anime: $Query(document,this._tags.anime),
            game: $Query(document,this._tags.game),
            manga: $Query(document, this._tags.manga),
            movie: $Query(document, this._tags.movie),
            novel: $Query(document, this._tags.novel),
            ova: $Query(document, this._tags.ova)
        }
    }

    private _name = (document: Document): string | null => {
        return $Query(document, this._tags.name);
    }

    private _titles = (document: Document): (string | null)[] => {
        return getListElement(document,this._tags.titles)
    }

    private _birthday = (document: Document): string | null => {
        return $Query(document, this._tags.birthday);
    }

    private _status = (document: Document): string | null => {
        return $Query(document, this._tags.status);
    }

    private _age = (document: Document): string [] => {
        return getAndRemoveTagBr(document,this._tags.age)
    }

    private _height = (document: Document): string [] => {
        return getAndRemoveTagBr(document,this._tags.height)
    }

    private _weight = (document: Document): string [] => {
        return getAndRemoveTagBr(document,this._tags.weight)
    }

    private _classification = (document: Document): (string | null)[] => {
        return getListElement(document,this._tags.classification)
    }

    private _team = (document: Document): (string | null)[] => {
        return getListElement(document,this._tags.team)
    }

    private _partner = (document: Document): (string | null)[] => {
        return getListElement(document,this._tags.partner)
    }

    private _occupation = (document: Document): (string | null)[] => {
        return getListElement(document,this._tags.occupation)
    }

    private _ninja_rank = (document: Document): (string | null)[] => {
        return getListElement(document,this._tags.ninja_rank)
    }

    private _ninja_registration = (document: Document): string | null => {
        return $Query(document, this._tags.ninja_registration);
    }

    private _sex = (document: Document): string | null => {
        return $Query(document, this._tags.sex);
    }

    private _photo = (document: Document): string | null => {
        return getImage(document,this._tags.photo)
    }

    private _voices = (document: Document): Voices[] => {
        const { name, country } = this._tags.voices
        const voices : Voices[] = [];
        const tagCountry = country.split("|")
        const tagName = name.split("|")
        tagCountry.forEach((value,index) => {
            voices.push({ 
                name : $Query(document,tagName[index]),
                country: $Query(document,tagCountry[index])
            })
        })
        return voices;
    }

    private _kekkei_genkai = (document: Document): KekkeiGenkai[] => {
        return getNameAndImage(document,this._tags.kekkei_genkai);
    }

    private _affiliation = (document: Document): Affiliation[] => {
        return getNameAndImage(document,this._tags.affiliation);
    }

    private _clan = (document: Document): Clan[] => {
        return getNameAndImage(document,this._tags.clan);
    }
}

