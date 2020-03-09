import { JSDOM } from "jsdom";
import { GenericPhoto } from "../shared/models/GenericsPhoto";

export function getTextContent(element: Element| null): string | null{
    if (element) {
        return removeSpacesString(element.textContent)
    } else {
        return null; 
    }
}

export async function getDom(url: string): Promise<Document>{
    const dom =  await JSDOM.fromURL(url);
    return dom.window.document;
}

export function $Query(document: Document,tag: string): string | null{
    return getTextContent(document.querySelector(tag))
}

export function getInnerHTML(element: HTMLElement | null): string | null{
    if (element) {
        return element.innerHTML;
    } else {
        return null; 
    }
}

export function getAndRemoveTagBr(document: Document,tag: string): string[]{
    const string = getInnerHTML(document.querySelector(tag))
    if(typeof string == "string"){
        return string.split("<br>").filter( el => el).map( el => stripHTML(el))
    }else{
        return []
    }
}

export function getImage(document: Document,tag: string): string | null{
    const photo = document.querySelector(tag) as HTMLImageElement
    if(photo){
        return photo.src
    }else{
        return null
    }
}

export function getNameAndAllImageCharacter(document: Document,tag: string): GenericPhoto[]{
    const list : GenericPhoto[] = [];
    const elements = document.querySelectorAll(tag);
    elements.forEach(element => {
        let icon = element.children[0] as HTMLImageElement
        list.push({
            name: element.getAttribute("title"),
            icon: icon.src
        })
    })
    return list;
}

export function getListElement(document: Document,tag: string): (string | null)[]{
    const list: (string | null)[] = [];
    const elements = document.querySelectorAll(tag)
    elements.forEach( (el: Element) => {
        list.push(getTextContent(el))
    })
    return list.filter( el => el);
}

export function getNameAndImage(document: Document,tag: string): GenericPhoto[]{
    const list : GenericPhoto[] = [];
    const elements = document.querySelectorAll(tag)
    for (let index = 0; index < elements.length; index+=2) {
        if(elements[index].children[0] && elements[index + 1]){
            list.push({
                name: removeSpacesString(elements[index + 1].textContent),
                icon: elements[index].children[0].getAttribute('data-src')
            })
        }
    }
    return list;
}

export function stripHTML(value: string): string{
    return value.replace(/<.*?>/g, '');
}

export function removeSpacesString(value : string | null): string | null{
    if(typeof value == "string"){
        return value.trim().replace(/\r?\n|\r/g,"");
    }else{
        return value;
    }
}
