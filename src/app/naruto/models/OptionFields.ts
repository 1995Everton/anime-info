export interface OptionFields {
    name?: boolean;
    photo?: boolean;
    titles?: boolean;
    birthday?: boolean;
    status?:boolean;
    age?: boolean;
    height?: boolean;
    weight?: boolean;
    classification?: boolean;
    team?: boolean;
    partner?: boolean;
    occupation?: boolean;
    ninja_rank?: boolean;
    ninja_registration?: boolean;
    sex?: boolean;
    debut?: boolean;
    voices?: boolean;
    kekkei_genkai?:boolean;
    affiliation?:boolean;
    clan?: boolean;
}

export const defaultOption: OptionFields = {
    name: true,
    photo: true,
    titles: true,
    birthday: true,
    status: true,
    age: true,
    height: true,
    weight: true,
    classification: true,
    team: true,
    partner: true,
    occupation: true,
    ninja_rank: true,
    ninja_registration: true,
    sex: true,
    debut: true,
    voices: true,
    kekkei_genkai: true,
    affiliation: true,
    clan: true
}
