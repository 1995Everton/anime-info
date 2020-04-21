import { GenericPhoto, Language } from '../../shared/models';
import {
  getDom,
  removeSpacesString,
  getListElement,
  $Query,
  getTextContent
} from '../../shared/utils/elements.dom';
import { Voices } from '../models';
import { Quotes } from '../models/Quotes';

export async function getNameAndPhotoTable(
  document: Document,
  tag: string,
  lang: Language,
  url: string
): Promise<string[] | GenericPhoto[]> {
  if (lang === 'pt-br') {
    const dom = await getDom(url);
    const elements = dom.querySelectorAll(tag);
    const list: GenericPhoto[] = [];
    for (let index = 1; index < elements.length; index += 1) {
      let icon = 'Sem Imagem';
      if (
        elements[index].children[1] &&
        elements[index].children[1].children[0] &&
        elements[index].children[1].children[0].children[0]
      ) {
        icon = elements[index].children[1].children[0].children[0].getAttribute(
          'data-src'
        ) as string;
        if (icon == null) {
          icon = elements[
            index
          ].children[1].children[0].children[0].getAttribute('src') as string;
        }
      }
      list.push({
        name: removeSpacesString(elements[index].children[0].textContent),
        icon
      });
    }
    return list;
  }
  return getListElement(document, tag);
}

export function getVoices(
  document: Document,
  country: string,
  name: string
): Voices[] {
  const voices: Voices[] = [];
  const tagCountry = country.split('|');
  const tagName = name.split('|');
  tagCountry.forEach((value, index) => {
    voices.push({
      name: $Query(document, tagName[index]),
      country: $Query(document, tagCountry[index])
    });
  });
  return voices;
}

export async function getQuotes(
  tag: string,
  lang: Language,
  url: string
): Promise<(string | Quotes)[]> {
  const list: (string | Quotes)[] = [];
  if (lang === 'pt-br') {
    const dom = await getDom(url);
    const elements = dom.querySelectorAll(tag);
    elements.forEach(el => {
      list.push({
        phrase: getTextContent(el.children[0]),
        recipient: getTextContent(el.children[1]),
        situation: getTextContent(el.children[2])
      });
    });
    list.shift();
  }

  return list;
}
