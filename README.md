
<h1 align="center">Bem Vindo ao anime-info 👋</h1>
<p align="left">
  <img src="https://img.shields.io/badge/version-1.0.6-blue.svg?cacheSeconds=2592000" />
    <img src="https://img.shields.io/badge/node->=10.0.0-blue.svg?cacheSeconds=2592000" />
     <img src="https://img.shields.io/badge/npm->=5.5.0-blue.svg?cacheSeconds=2592000" />
     <img src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?cacheSeconds=2592000" />
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" />
    <img src="https://img.shields.io/badge/changelog-gitmoji-brightgreen.svg" alt="gitmoji-changelog">
</p>

> Plugin usado para buscar informações de personagens direto do site oficial da  [Fandom](https://www.fandom.com/) e retorna um JSON. 

  <p style="width: 500px;
  background-color: #ff000024;
  font-family: sans-serif;
  color: #ff0000;
  max-width: 100%;
  margin: 0 auto;
  padding: 12px;
  box-sizing: border-box">🙅‍♂️ Atenção !!! Essa biblioteca foi criada apenas para fins didáticos e a propriedade intelectual das informações pertence a seus respectivos criadores.</p>

<table>
  <tr>
    <th colspan="2">Possibilidade de buscar de personagem por anime</th>
  </tr>
  <tr>
    <th style="text-align: center">Anime</th>
    <th style="text-align: center">Quantidade</th>
  </tr>
  <tr>
    <td>Naruto</td>
    <td style="text-align: center">+ 994</td>
  </tr>
  <tr>
    <td>DragonBall Z</td>
    <td style="text-align: center">+ 250</td>
  </tr>
  <tr>
    <td>One Punch Man</td>
    <td style="text-align: center">+ 135</td>
  </tr>
  <tr>
    <td>Hunter x Hunter</td>
    <td style="text-align: center">+ 96</td>
  </tr>
</table>


## ✨ Demo

- Site: [Anime Info Demo](https://anime-info-demo.herokuapp.com/)
- Repositório [Anime Info Demo](https://github.com/1995Everton/anime-info-demo)

## 👉 Instalação

```sh
npm install anime-info
```

## 🚀 Uso

```ts
import { Naruto } from "anime-info";

const naruto = new Naruto();

async function searchCharacter(){
	const itachi = await naruto.getCharacter("Itachi_Uchiha");
	console.log(itachi);
}

searchCharacter();

```
🐛 [Alerta] Você deve usar o nome completo do personagem separando por "_". 

😉 [Dica] Existe também o método `getListCharacters` que retorna uma lista dos personagem mais relevantes.

Também e possível desabilitar um ou mais campos com a propriedade`exclude`.
```ts

const itachi = await naruto.getCharacter("Itachi_Uchiha",{ 
	exclude: [
		"name",
		"birthday"
	]
});

```

Ou buscar campos específicos com a propriedade `only`
```ts

const itachi = await naruto.getCharacter("Itachi_Uchiha",{ 
	only: [
		"name",
		"debut"
	]
});

```
Ambos recebem um array de string com o nome exato da propriedade escolhida.

## 🌎 Internacionalização

```ts
import { Naruto } from "anime-info";

// default "pt-br"
const naruto = new Naruto({ lang : "es" });

```

<table class="tg" style="undefined;table-layout: fixed; width: 500px">
<colgroup>
<col style="width: 94px">
<col style="width: 98px">
</colgroup>
  <tr>
    <th class="tg-c3ow" style="text-align: center">Linguagens</th>
    <th class="tg-baqh" style="text-align: center">lang</th>
    <th class="tg-baqh" style="text-align: center">Naruto</th>
    <th class="tg-baqh" style="text-align: center">Dragon Ball Z</th>
    <th class="tg-baqh" style="text-align: center">One Punch Man</th>
    <th class="tg-baqh" style="text-align: center">Hunter x Hunter</th>
  </tr>
  <tr>
    <td class="tg-c3ow"><a href="https://www.fandom.com/explore-pt-br?uselang=pt-br">
	Português
	</a>
</td>
    <td class="tg-baqh"  style="text-align: center">pr-br</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
    <td class="tg-baqh" style="text-align: center; color: red;font-size: 25px">✖</td>
    <td class="tg-baqh" style="text-align: center; color: red;font-size: 25px">✖</td>
  </tr>
  <tr>
        <td class="tg-c3ow"><a href="https://www.fandom.com/explore-es?uselang=es">
		Espanol
		</a>
  </td>
  <td class="tg-baqh" style="text-align: center">es</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
  </tr>
  <tr>
    <td class="tg-c3ow">
		<a href="https://www.fandom.com/">English
		</a>
	</td>
    <td class="tg-baqh"  style="text-align: center">en</td>
    <td class="tg-baqh" style="text-align: center; color: red;font-size: 25px">✖</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
    <td class="tg-baqh" style="text-align: center; color: green;font-size: 25px">✔</td>
  </tr>
</table>

## 📖 Documentação

### Métodos

#### 📌 getCharacter

- Retorna os dados de um determinado personagem

  `getCharacter(name , option): Promise<Object>;`

<table>
  <tr>
    <th><span style="font-weight:600;font-style:normal">Opção</span></th>
    <th><span style="font-weight:600;font-style:normal">Type</span></th>
    <th >Requirido</th>
    <th><span style="font-weight:600;font-style:normal">Padrão</span></th>
    <th><span style="font-weight:600;font-style:normal">Descrição</span></th>
  </tr>
  <tr>
    <td><span style="font-weight:normal;font-style:italic">name</span></td>
    <td><span style="font-weight:400;font-style:normal">String</span></td>
    <td>true</td>
    <td>null</td>
    <td>Nome do personagem que deseja buscar</td>
  </tr>
  <tr style="width: 200px;">
    <td><span style="font-weight:normal;font-style:italic">option</span></td>
    <td>Object</td>
    <td>false</td>
    <td>{<br>   "exclude": [ ],<br>   "only": [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`all fields`<br>&nbsp;&nbsp;&nbsp;]<br>}</td>
    <td>Opções de retorno do <span style="font-style:italic">JSON</span></td>
  </tr>
</table>

#### 📌 getListCharacters

- Retorna uma lista com os nomes dos personagens

 `getListCharacters(search): Array<string>;`

  <table>
  <tr>
    <th><span style="font-weight:600;font-style:normal">Opção</span></th>
    <th><span style="font-weight:600;font-style:normal">Type</span></th>
    <th >Requirido</th>
    <th><span style="font-weight:600;font-style:normal">Padrão</span></th>
    <th><span style="font-weight:600;font-style:normal">Descrição</span></th>
  </tr>
  <tr>
    <td><span style="font-weight:normal;font-style:italic">search </span></td>
    <td><span style="font-weight:400;font-style:normal">String</span></td>
    <td>false</td>
    <td></td>
    <td>Filtra o nome dos personagens, retorna todos se não informado</td>
  </tr>
</table>


### 💯 Suporte ao TypeScript

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
