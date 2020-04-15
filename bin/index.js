const{ Naruto, DragonBall, OnePiece  } = require("../dist")

async function getCharacterNaruto(){
    const naruto = new Naruto({
        lang: "es"
    });
    const character = await naruto.getCharacter("Hidan")
    console.log(character);
}

async function getCharacterDragonBall(){
    const dragon_ball = new DragonBall({
        lang: "pt-br"
    });
    const character = await dragon_ball.getCharacter("Goku")
    console.log(character);
}

async function getCharacterOnePiece(){
    const one_piece = new OnePiece({
        lang: "pt-br"
    });
    const character = await one_piece.getCharacter("Monkey_D._Luffy")
    console.log(character);
}

getCharacterNaruto();
// getCharacterDragonBall();
// getCharacterOnePiece();