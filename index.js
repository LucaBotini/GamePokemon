let danoFinal = 0;
let hpInimigo = 230

//HP DE CADA POKÉMON
let hpCharmander = 170;
let hpBulbasaur = 155;
let hpSquirtle = 160;

//ATK DE CADA POKÉMON
let atkCharmander;
let atkBulbasaur = gerarNumeroAleatorio(15, 25);
let atkSquirtle = gerarNumeroAleatorio(8, 35);
let equipeRocketAtk;

//CURA DE CADA POKÉMON
let curaCharmander;
let curaBulbasaur = gerarNumeroAleatorio(10, 14);
let curaSquirtle = gerarNumeroAleatorio(4, 12);

//MOSTAR VIDA DO RIVAL
let mostrarhpInimigo = document.getElementById('hpInimigo')
mostrarhpInimigo.textContent = `HP DO RIVAL: ${hpInimigo}`


//MOSTRAR VIDA DO MEU POKÉMON
let mostrarhpCharmanderr = document.getElementById('hpCharmanderr')
mostrarhpCharmanderr.textContent = `HP DO CHARMANDER: ${hpCharmander}`

//MENSAGEM NA TELA PÓS CLIQUES
let popup1 = document.getElementById('popup1') //MEU ATAQUE
let popup = document.getElementById('popup') //ATAQUE ADVERSARIO

//FUNÇÃO ATAQUE EQUIPE ROCKET
function atkER(){
  let equipeRocketAtk = gerarNumeroAleatorio(10, 40);
  popup.textContent = `VOCÊ FOI ATACADO PELA EQUIPE ROCKET COM ${equipeRocketAtk} DE DANO`;
  return equipeRocketAtk;
}

//FUNÇÃO AO CLICAR EM ATACAR
function atkC(){
    let atkCharmander = gerarNumeroAleatorio(5, 40);
  popup.style.backgroundColor = 'red';
  popup1.textContent = `VOCÊ ATACOU EQUIPE ROCKET COM ${atkCharmander} DE DANO`;
    return atkCharmander;
}

function executarAtaque() {
    //EXECUTANDO ATAQUE
      let ataque = atkC();
    //DIMINUINDO LIFE INIMIGA
    hpInimigo = hpInimigo - ataque;
    //MOSTRANDO LIFE INIMIGA
    mostrarhpInimigo.textContent = `HP DO RIVAL: ${hpInimigo}`;
    //TOMANDO HIT DE VOLTA
      let ataqueER = atkER();
      //DIMINUINDO LIFE ALIADA
      hpCharmander = hpCharmander - ataqueER;
      //MOSTRANDO LIFE INIMIGA
      mostrarhpCharmanderr.textContent = `HP DO CHARMANDER: ${hpCharmander}`;

      if(hpCharmander <= 0){     
        barulhoatk.disabled = true
        mostrarhpCharmanderr.textContent = `HP DO CHARMANDER: 0`;
        alert('Você Perdeu!')
    }


    if(hpInimigo <= 0){
        barulhoatk.disabled = true
        mostrarhpInimigo.textContent = `HP DO RIVAL: 0`;
        esVitoria.play();
        alert('Você Venceu!')
    }

    setTimeout(() => {
      barulhoatk.disabled = false;
    }, 3000);
}

//FUNÇÃO AO CLICAR EM CURAR
function curarC(){
  let curaCharmander = gerarNumeroAleatorio(1, 17);
  // popup1.style.display = 'none';
  // popup1.style.padding = '0%';
  popup.style.backgroundColor = 'blue';
  popup.textContent = `VOCÊ SE CUROU COM ${curaCharmander} DE HP`;
  return curaCharmander;
}

function executarCura() {
  let curas = curarC();
  hpCharmander = hpCharmander + curas;

  mostrarhpCharmanderr.textContent = `HP DO CHARMANDER: ${hpCharmander}`;
  if(hpCharmander <= 0){     


      mostrarhpCharmanderr.textContent = `HP DO CHARMANDER: 0`;
      alert('Você Perdeu!')
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


function exibirPopup() {
  var popup = document.getElementById('popup');
  var popup1 = document.getElementById('popup1');
  
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