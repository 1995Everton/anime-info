const { Naruto } = require('../lib')

async function get(){

    const naruto = new Naruto({
        lang: "pt-br"
    });

    const itachi = await naruto.getCharacter("Sasuke_Uchiha",{});

    console.log(itachi)

}

get();




