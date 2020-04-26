import { GenericPhoto, Language } from '../../shared/models';
import { getDom } from '../../shared/utils/elements.dom';

function getGenericPhoto(document: Document, tag: string): GenericPhoto[] {
  const list: GenericPhoto[] = [];
  const elements = document.querySelectorAll(tag);
  elements.forEach(el => {
    const icon = el.getAttribute('data-src') || el.getAttribute('src');
    list.push({
      icon,
      name: el.getAttribute('title')
    });
  });
  return list;
}

export async function getGallery(
  baseUrl: string,
  tag: string,
  lang: Language
): Promise<GenericPhoto[]> {
  try {
    const document = await getDom(
      `${baseUrl}/${lang === 'es' ? 'Galería' : 'Anime_Gallery'}`
    );
    return getGenericPhoto(document, tag);
  } catch (error) {
    if (lang === 'en') {
      try {
        const document = await getDom(`${baseUrl}/Image_Gallery`);
        return getGenericPhoto(document, tag);
      } catch (e) {
        return [];
      }
    }
    return [];
  }
}
