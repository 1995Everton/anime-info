export enum TagsPtBr {
  Name = '.page-header__title',
  Description = '#mw-content-text > aside ~ p',
  Sex = '[data-source="Sexo"] > div',
  Birthday = '[data-source="Nasceu"] > div > a',
  Height = '[data-source="Altura"] > div',
  Weight = '[data-source="Peso"] > div',
  Alias = '[data-source="NomeAlternativo"] > div',
  Race = '[data-source="Raça"] > div > a',
  Death = '[data-source="Morreu"] > div a',
  Address = '[data-source="Endereço"] > div > a',
  Occupation = '[data-source="Ocupação"] > div',
  Relatives = '[data-source="Família"] > div > li',
  Photo = "[data-source='imagem'] > div figure a|[data-source='imagem'] a",
  Appears = '[data-source="Apareceu em"] > div > div > a',
  Transformation = '.show-info-icon'
}

export enum TagsEn {
  Name = '.page-header__title',
  Description = '#mw-content-text > aside ~ p',
  Sex = '[data-source="Gender"] > div ',
  Birthday = '[data-source="Date of birth"] > div > a ',
  Height = '[data-source="Height"] > div',
  Weight = '[data-source="Weight"] > div',
  Alias = '[data-source="AltName"] > div',
  Race = '[data-source="Race"] > div > a',
  Death = '[data-source="Date of death"] > div a ',
  Address = '[data-source="Address"] > div > a',
  Occupation = '[data-source="Occupation"] > div',
  Relatives = '[data-source="FamConnect"] > div > a',
  Photo = '[data-source="image"] > div figure a|[data-source="image"] a',
  Appears = '[data-source="Appears in"] div > div > div > a',
  Transformation = '[title="Forms and transformations"] > figure'
}

export enum TagsEs {
  Name = '.page-header__title',
  Description = '#mw-content-text > aside ~ p',
  Sex = '[data-source="sexo"] > div',
  Birthday = '[data-source="fecha de nacimiento"] > div > a',
  Height = '[data-source="Altura"] > div',
  Weight = '[data-source="Peso"] > div',
  Alias = '[data-source="otros nombres"] > div > li',
  Race = '[data-source="raza"] > div > a',
  Death = '[data-source="fecha de muerte"] > div a',
  Address = '[data-source="residencia"] > div a',
  Relatives = '[data-source="ocupación"] > div > li',
  Family = '[data-source="familia"] > div > li',
  Photo = '.pi-image-collection > div figure a|.pi-image a',
  Appears = '[data-source="saga"] > div > a',
  Transformation = '[data-source="transformaciones"] > div > li'
}
