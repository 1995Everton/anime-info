const{ Naruto, DragonBall } = require("../dist")

async function getCharacterNaruto(){
    const naruto = new Naruto({
        lang: "pt-br"
    });
    const character = await naruto.getCharacter("Itachi_Uchiha")
    console.log(character);
}

async function getCharacterDragonBall(){
    const dragon_ball = new DragonBall({
        lang: "pt-br"
    });
    const character = await dragon_ball.getCharacter("Goku")
    console.log(character);
}

getCharacterNaruto();
// getCharacterDragonBall();
