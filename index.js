let danoFinal = 0;
let hpInimigo = 230


//ATK DE CADA POKÉMON
let atkCharmander;
let atkBulbasaur = gerarNumeroAleatorio(15, 25);
let atkSquirtle = gerarNumeroAleatorio(8, 35);

//MOSTAR VIDA DO RIVAL
let mostrarhpInimigo = document.getElementById('hpInimigo')
mostrarhpInimigo.textContent = `HP DO RIVAL: ${hpInimigo}`

//HP DE CADA POKÉMON
let hpCharmander = 170;
let hpBulbasaur = 155;
let hpSquirtle = 160;

//FUNÇÃO AO CLICAR EM ATACAR
   atkCharmander = gerarNumeroAleatorio(5, 40)

function atkC(){
    let atkCharmander = gerarNumeroAleatorio(5, 40);
    console.log(`ATK CHARMANDER ${atkCharmander}`);
    return atkCharmander;
}

function executarAtaque() {
    let ataque = atkC();
    hpInimigo = hpInimigo - ataque;
    console.log(`HP INIMIGO ${hpInimigo}`);

    mostrarhpInimigo.textContent = `HP DO RIVAL: ${hpInimigo}`;
    if(hpInimigo <= 0){
        alert('Você Venceu!')
        hpInimigo - hpInimigo + 230
    }
}


//CURA DE CADA POKÉMON
let curaCharmander = gerarNumeroAleatorio(1, 17);
let curaBulbasaur = gerarNumeroAleatorio(10, 14);
let curaSquirtle = gerarNumeroAleatorio(4, 12);



function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}