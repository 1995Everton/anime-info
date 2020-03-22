import { getInnerHTML, cleanString } from '../../utils/elements.dom';
import { Language } from '../../shared/enums';
import { Transformation } from '../models';

export function getTransformations(
  document: Document,
  tag: string,
  lang: Language
): (Transformation | string | null)[] {
  const list: (Transformation | string | null)[] = [];
  const elements = document.querySelectorAll(tag) as NodeListOf<HTMLElement>;
  elements.forEach(element => {
    if (lang === Language.ES) {
      list.push(cleanString(getInnerHTML(element)));
    } else {
      let icon: string | null = 'Sem Imagem';
      if (element.children[0] && element.children[0].children[0]) {
        icon = element.children[0].children[0].getAttribute('data-src');
      }
      list.push({
        icon,
        name: cleanString(getInnerHTML(element))
      });
    }
  });

  return list;
}
