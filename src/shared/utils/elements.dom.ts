import { JSDOM } from 'jsdom';
import { GenericPhoto } from '../models/GenericsPhoto';

export function removeSquareBrackets(value: string | null): string | null {
  if (typeof value === 'string') {
    return value.replace(/ *\[[^)]*\] */g, '');
  }
  return value;
}

export function removeSpacesString(value: string | null): string | null {
  if (typeof value === 'string') {
    return value.trim().replace(/\r?\n|\r/g, '');
  }
  return value;
}

export function stripHTML(value: string | null): string | null {
  if (typeof value === 'string') {
    return value.replace(/<.*?>/g, '');
  }
  return value;
}

export function cleanString(value: string | null): string | null {
  if (typeof value === 'string') {
    return removeSpacesString(removeSquareBrackets(stripHTML(value)));
  }
  return value;
}

export function getTextContent(element: Element | null): string | null {
  if (element) {
    return removeSpacesString(removeSquareBrackets(element.textContent));
  }
  return null;
}

export async function getDom(url: string): Promise<Document> {
  const dom = await JSDOM.fromURL(url);
  return dom.window.document;
}

export function $Query(document: Document, tag: string): string | null {
  return getTextContent(document.querySelector(tag));
}

export function getInnerHTML(element: HTMLElement | null): string | null {
  if (element) {
    return element.innerHTML;
  }
  return null;
}

export function getAndRemoveTagBr(document: Document, tag: string): string[] {
  const string = getInnerHTML(document.querySelector(tag));
  if (typeof string === 'string') {
    return string
      .split('<br>')
      .filter(el => el)
      .map(el => removeSquareBrackets(stripHTML(el))) as string[];
  }
  return [];
}

export function getImage(document: Document, tag: string): string | null {
  const photo = document.querySelector(tag) as HTMLImageElement;
  if (photo) {
    return photo.src;
  }
  return null;
}

export function getNameAndAllImageCharacter(
  document: Document,
  tag: string
): GenericPhoto[] {
  const list: GenericPhoto[] = [];
  const tags = tag.split('|');
  const elements = document.querySelectorAll(tags[0]);
  if (elements.length) {
    elements.forEach(element => {
      const icon = element.children[0] as HTMLImageElement;
      list.push({
        name: element.getAttribute('title'),
        icon: icon.src
      });
    });
  } else {
    const element = document.querySelector(tags[1]) as Element;
    if (element) {
      const icon = element.children[0] as HTMLImageElement;
      list.push({
        name: icon.getAttribute('data-image-name'),
        icon: icon.src
      });
    }
  }

  return list;
}

export function getListElement(
  document: Document,
  tag: string,
  innerHtml = false
): string[] {
  const list: (string | null)[] = [];
  const elements = document.querySelectorAll(tag);
  elements.forEach((el: Element) => {
    if (innerHtml) {
      list.push(cleanString(getInnerHTML(el as HTMLElement)));
    } else {
      list.push(getTextContent(el));
    }
  });
  return list.filter(el => el) as string[];
}

export function getNameAndImage(
  document: Document,
  tag: string
): GenericPhoto[] {
  const list: GenericPhoto[] = [];
  const elements = document.querySelectorAll(tag);
  for (let index = 0; index < elements.length; index += 2) {
    if (elements[index].children[0] && elements[index + 1]) {
      list.push({
        name: removeSpacesString(elements[index + 1].textContent),
        icon: elements[index].children[0].getAttribute('data-src')
      });
    }
  }
  return list;
}

export function getNameAndImageOnly(
  document: Document,
  tag: string
): GenericPhoto[] {
  const list: GenericPhoto[] = [];
  const elements = document.querySelectorAll(tag);
  elements.forEach(element => {
    list.push({
      icon: element.children[0].getAttribute('data-src'),
      name: element.getAttribute('title')
    });
  });
  return list;
}
