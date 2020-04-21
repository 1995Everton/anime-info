import { getInnerHTML, cleanString } from '../../shared/utils/elements.dom';
import { GenericPhoto, Language } from '../../shared/models';

export function getTransformations(
  document: Document,
  tag: string,
  lang: Language
): (GenericPhoto | string)[] {
  const list: (GenericPhoto | string)[] = [];
  const elements = document.querySelectorAll(tag) as NodeListOf<HTMLElement>;
  elements.forEach(element => {
    if (lang === 'es') {
      list.push(cleanString(getInnerHTML(element)) as string);
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
