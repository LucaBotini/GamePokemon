let danoFinal = 0;
let hpInimigo = 170;
let resultado;
//HP DE CADA POKÉMON
let hpCharmander = 170;
let hpBulbasaur = 155;
let hpSquirtle = 160;


//FOTOS
let fotocharmander = document.getElementById('.pokemon')


//ATK DE CADA POKÉMON
let atkCharmander;
let atkBulbasaur = gerarNumeroAleatorio(15, 25);
let atkSquirtle = gerarNumeroAleatorio(8, 35);
let equipeRocketAtk;

//CURA DE CADA POKÉMON
let curaBulbasaur = gerarNumeroAleatorio(10, 14);
let curaSquirtle = gerarNumeroAleatorio(4, 12);

//MOSTAR VIDA DO RIVAL
let mostrarhpInimigo = document.getElementById('hpInimigo')
mostrarhpInimigo.textContent = `HP DO GENGAR: ${hpInimigo}`


//MOSTRAR VIDA DO MEU POKÉMON
let mostrarhpBulbasaur = document.getElementById('hpCharmanderr')
mostrarhpBulbasaur.textContent = `HP DO BULBASAUR: ${hpBulbasaur}`

//MENSAGEM NA TELA PÓS CLIQUES
let popup1 = document.getElementById('popup1') //MEU ATAQUE
let popup = document.getElementById('popup') //ATAQUE ADVERSARIO
let popup3 = document.getElementById('popup3') //MINHA CURA


//FUNÇÃO ATAQUE GENGAR
function atkER(){
  let equipeRocketAtk = gerarNumeroAleatorio(15, 25);
  popup.textContent = `VOCÊ FOI ATACADO POR GENGAR COM ${equipeRocketAtk} DE DANO`;
  hpBulbasaur = hpBulbasaur - equipeRocketAtk
  return equipeRocketAtk;
}

//FUNÇÃO AO CLICAR EM ATACAR
function atkC(){
    let atkCharmander = gerarNumeroAleatorio(5, 40);
  popup.style.backgroundColor = 'red';
  popup1.textContent = `VOCÊ ATACOU GENGAR COM ${atkCharmander} DE DANO`;
    return atkCharmander;
}


function executarAtaque() {
    //EXECUTANDO ATAQUE
      let ataque = atkC();
    //DIMINUINDO LIFE INIMIGA
    hpInimigo = hpInimigo - ataque;
    //MOSTRANDO LIFE INIMIGA
    mostrarhpInimigo.textContent = `HP DO GENGAR: ${hpInimigo}`;
    //TOMANDO HIT DE VOLTA
      atkER();
      //MOSTRANDO LIFE ALIADA
      mostrarhpBulbasaur.textContent = `HP DO BULBASAUR: ${hpBulbasaur}`;

      //CRIANDO DELAY PARA ATK
      barulhoatk.style.pointerEvents = 'none';
      barulhoatk.style.borderColor = 'red';
    
    
      setTimeout(function() {
      barulhoatk.style.pointerEvents = '';
      barulhoatk.style.borderColor = 'rgb(60, 250, 2)';
    }, 2500);

    //CONDIÇÕES
      if(hpBulbasaur <= 0){     
        let esDerrota = new Audio('./musicas/derrotaBattle.mp3');
        esDerrota.play()
        mostrarhpBulbasaur.textContent = `HP DO BULBASAUR: 0`;
        barulhoatk.disabled = true
        barulhocura.disabled = true
        mostrarhpBulbasaur.textContent = `HP DO BULBASAUR: 0`;
    }


    if(hpInimigo <= 0){
        barulhoatk.disabled = true
        barulhocura.disabled = true
        mostrarhpInimigo.textContent = `HP DO GENGAR: 0`;
        esVitoria.play();
    }

}

//FUNÇÃO AO CLICAR EM CURAR
function curarC(){
  //GERANDO CURA
  let curaBulbasaur = gerarNumeroAleatorio(10, 14);
  hpBulbasaur = hpBulbasaur + curaBulbasaur;
  popup3.textContent = `VOCÊ SE CUROU COM ${curaBulbasaur} DE HP`;
      //TOMANDO HIT DE VOLTA
      atkER();
  //ALTERANDO CORES POR DELAY
  barulhocura.style.pointerEvents = 'none';
  barulhocura.style.borderColor = 'red';

    //MOSTRANDO LIFE ALIADA
    mostrarhpBulbasaur.textContent = `HP DO BULBASAUR: ${hpBulbasaur}`;

//GERANDO DELAY
  setTimeout(function() {
  barulhocura.style.pointerEvents = '';
  barulhocura.style.borderColor = 'rgb(0, 255, 242)';
}, 6000);

  return curaBulbasaur;
}

function executarCura() {
  curarC();
  popup.style.display = 'block';
  setTimeout(() => {
  popup.style.display = 'none';
  }, 2500);
  
    //DIMINUINDO LIFE ALIADA
    if(hpBulbasaur <= 0){     
      let esDerrota = new Audio('./musicas/derrotaBattle.mp3');
      esDerrota.play()
      mostrarhpBulbasaur.textContent = `HP DO BULBASAUR: 0`;
    }
}

let barulhocura = document.getElementById('botaocura')
let audioCura = new Audio('./musicas/esCura.mp3');
barulhocura.addEventListener('click', () => {
  audioCura.play();
})


let barulhoatk = document.getElementById('botaoatk');
let audio1 = new Audio('./musicas/efeitoatk.mp3');
let audio2 = new Audio('./musicas/efeitoatk1.mp3');
let esVitoria = new Audio('./musicas/esVitoria.mp3');
let alternarAudio = false;

barulhoatk.addEventListener('click', () => {
    if (alternarAudio) {
      audio1.play();
    } else {
      audio2.play();
    }
  
    alternarAudio = !alternarAudio;
  });


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function popupCura(){
  let popup3 = document.getElementById('popup3')

  popup3.style.display = 'block';


  setTimeout(function() {
    popup3.style.display = 'none';
}, 2500);
}


function exibirPopup() {
  let popup = document.getElementById('popup');
  let popup1 = document.getElementById('popup1');
  
  popup.style.display = 'block';
  popup1.style.display = 'block';

  // Ocultar o popup após 3 segundos (3000 milissegundos)
  setTimeout(function() {
      popup.style.display = 'none';
      popup1.style.display = 'none';
  }, 2500);
}


//MIXER DE VOLUME
document.querySelector('audio').volume = 0.1;

document.addEventListener("DOMContentLoaded", function () {
  let somcura = document.getElementById('somcura');
  
  somcura.volume = 0.1;
});