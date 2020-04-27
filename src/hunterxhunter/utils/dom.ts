import { AbilitiesDescription } from '../models/AbilitiesDescription';
import { cleanString } from '../../shared/utils/elements.dom';

function clean(element: Element | null, innerHTML = false): string | null {
  if (innerHTML && element) {
    return cleanString(element.innerHTML);
  }
  if (element) {
    return cleanString(element.textContent);
  }
  return null;
}

export function getAbilitiesDescription(
  document: Document,
  tags: string
): AbilitiesDescription[] {
  const abilities_description: AbilitiesDescription[] = [];
  const elements = document.querySelectorAll(tags);
  for (let index = 1; index < elements.length; index += 2) {
    if (elements[index] && elements[index + 1]) {
      const photo: string[] = [];
      const typeEl = elements[index].querySelector('th:first-child');
      const nameEl = elements[index].querySelector('th:last-child');
      let photoEl = elements[index + 1].querySelectorAll('th img');
      if (photoEl.length === 0) {
        photoEl = elements[index + 1].querySelectorAll('td img');
      }
      let descriptionEl = elements[index + 1].querySelector('td') as Element;
      if (descriptionEl) {
        descriptionEl = elements[index + 1].lastChild as Element;
      }
      photoEl.forEach((img: Element) => {
        const string = img.getAttribute('data-src');
        if (string) {
          photo.push(string);
        }
      });
      abilities_description.push({
        description: clean(descriptionEl as Element, true),
        name: clean(nameEl, true),
        photo,
        type: clean(typeEl, true)
      });
    }
  }
  return abilities_description;
}
