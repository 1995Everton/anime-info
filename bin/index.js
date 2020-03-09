const { Naruto } = require('../lib')

async function get(){

    const naruto = new Naruto({
        lang: "pt-br"
    });

    const itachi = await naruto.getCharacter("Kakashi_Hatake",{birthday: true,name: true});

    return itachi;

}

console.log(get());




