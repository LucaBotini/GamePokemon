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
let popup = document.getElementById('popup')

//FUNÇÃO AO CLICAR EM ATACAR
function atkC(){
    let atkCharmander = gerarNumeroAleatorio(5, 40);
    popup.textContent = `VOCÊ ATACOU EQUIPE ROCKET COM ${atkCharmander} DE DANO`;
    return atkCharmander;
}

function executarAtaque() {
    let ataque = atkC();
    hpInimigo = hpInimigo - ataque;
    
    mostrarhpInimigo.textContent = `HP DO RIVAL: ${hpInimigo}`;
    if(hpInimigo <= 0){
        mostrarhpInimigo.textContent = `HP DO RIVAL: 0`;
        esVitoria.play();
        barulhoatk.disabled = true
        alert('Você Venceu!')
    }
}

//FUNÇÃO AO CLICAR EM CURAR
function curarC(){
  let curaCharmander = gerarNumeroAleatorio(1, 17);
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


document.querySelector('audio').volume = 0.2;


function exibirPopup() {
  var popup = document.getElementById('popup');
  
  popup.style.display = 'block';

  // Ocultar o popup após 3 segundos (3000 milissegundos)
  setTimeout(function() {
      popup.style.display = 'none';
  }, 3000);
}