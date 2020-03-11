
<h1 align="center">Bem Vindo ao anime-info 👋</h1>
<p align="left">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
    <img src="https://img.shields.io/badge/node->=10.0.0-blue.svg?cacheSeconds=2592000" />
     <img src="https://img.shields.io/badge/npm->=5.5.0-blue.svg?cacheSeconds=2592000" />
     <img src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?cacheSeconds=2592000" />
  <a href="https://github.com/kefranabg/readme-md-generator/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
  </a>
  <a href="https://github.com/frinyvonnick/gitmoji-changelog">
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
  </a>
</p>

> Plugin usado para buscar informações de personagens direto do site oficial da  [Fandom](https://www.fandom.com/) e retorna um JSON. 

## ✨ Demo

Ainda não disponível

## 👉 Instalação

```sh
npm install anime-info
```

## 🚀 Uso

```ts
import { Naruto } from "anime-info";

const naruto = new Naruto();

async function searchCharacter(){
    // retorna uma promesa
	const itachi = await naruto.getCharacter("Itachi_Uchiha");
	console.log(itachi);
}

searchCharacter();

```
🐛 Você deve usar o nome completo do personagem separando por "_". E uma limitação que irei trabalhar das próximas atualizações

Você também pode desabilitar um ou mais campos.
```ts

const itachi = await naruto.getCharacter("Itachi_Uchiha",{ 
	name : false,
	jutsu: false
});

```

## 🌎 Internacionalização

```ts
import { Naruto } from "anime-info";

// default "pt-br"
const naruto = new Naruto({ lang : "es" });

```

<table class="tg" style="undefined;table-layout: fixed; width: 192px">
<colgroup>
<col style="width: 94px">
<col style="width: 98px">
</colgroup>
  <tr>
    <th class="tg-c3ow">Linguagens</th>
    <th class="tg-baqh">lang</th>
  </tr>
  <tr>
    <td class="tg-c3ow">
			<a href="https://www.fandom.com/explore-pt-br?uselang=pt-br">Português</a>
</td>
    <td class="tg-baqh">pr-br</td>
  </tr>
  <tr>
        <td class="tg-c3ow">
		<a href="https://www.fandom.com/explore-es?uselang=es">Espanol</a>
        </td>
    <td class="tg-baqh">es</td>
  </tr>
  <tr>
    <td class="tg-c3ow">
		<a href="https://www.fandom.com/">English</a>
	</td>
    <td class="tg-baqh">not available</td>
  </tr>
</table>

## 🤝   Contribuindo

Contribuições, problemas e solicitações de recursos são bem-vindos.<br />
Sinta-se livre para verificar [issues page](https://github.com/1995Everton/anime-info/issues)  se você quiser contribuir.<br />

## Autor

👤 **Everton Cardoso**

- Github: [1995Everton](https://github.com/1995Everton)

## Mostre seu apoio

Por favor ⭐️ esse repositório se ele lhe ajudou!


## 📝 License

Copyright © 2020 [Everton](https://github.com/1995Everton).<br />
Esse projeto e licenciado por [MIT](https://github.com/1995Everton/anime-info/blob/master/LICENSE).

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
