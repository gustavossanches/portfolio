// efeito de digitação do texto inicial
const texto = 'Aqui você poderá saber um pouco mais sobre mim, o que estudo e como trabalho.'
const tag = document.getElementById("description")

const texto2 = 'Olá! Me chamo Gustavo e sou desenvolvedor.'
const tag2 = document.getElementById("texto-principal")

function efeitoTeclado(texto, tag, tempo, letraDelay, parar) {//adicionar mais um parametro e caso tenha ele, a bara do cursos some depois de um tempo para simular que foi para o outro paragrafo
  const arrayLetras = texto.split('')

  let cursor = document.createElement('span')
  cursor.innerText = '|'
  
  //faz o cursor parar ou nao no final do texto
  if(parar){
    cursor.style.animation = 'meu-cursor 1s step-end 2 forwards';
  }else{
    cursor.style.animation = 'meu-cursor 1s step-end infinite';
  }

  tag.appendChild(cursor)

  let textoAtual = ''
  let atrasoAcumulado = 0
  let teste = 0

  arrayLetras.forEach((e, i) => {
    // Se for a letra especificada, adiciona o atraso especial
    if (i === letraDelay) {
      atrasoAcumulado += 3000 - tempo  // Adiciona apenas a diferença do atraso
    }
    // Adiciona o atraso ao tempo do setTimeout
    setTimeout(() => {
      textoAtual += e
      tag.innerText = textoAtual
      tag.appendChild(cursor)  // Reaplica o cursor, garantindo que ele permaneça visível
      teste =  atrasoAcumulado + (tempo * i)
      console.log('TESTE -> ', teste)
    }, atrasoAcumulado + (tempo * i))
  })
}
  efeitoTeclado(texto, tag, 50, 7)
  efeitoTeclado(texto2, tag2, 50, 4, 'teste')

// setTimeout(() => {
  //   efeitoTeclado(texto, tag, 50, 7)
  //   efeitoTeclado(texto2, tag2, 50, 4, 'teste')
  
// }, 10000);




//HEADER
//se estiver no topo ou se o mouse estiver em cima, fica colorido
//se nao estiver no topo, fica opaco

function rolarAteMinhaSecao(e) {
  var botao = document.getElementById(e);
  if (botao) {
    botao.scrollIntoView({ behavior: 'smooth' });
    botao.scrollTo()
  }
}

const header = document.getElementsByTagName("header")[0];
let mouseHeader = true

header.addEventListener('mouseenter', () => {
  mouseHeader = true
  // console.log('entrou')
  // console.log(mouseHeader)

})
header.addEventListener('mouseleave', () => {
  mouseHeader = false
  // console.log(mouseHeader)
  // console.log('saiu')
})


// window.onscroll = function () {
//   // console.log(header)
//   if (window.scrollY > 50 && !mouseHeader) {
//     header.classList.add("header_opaco");
//   } else {
//     header.classList.remove("header_opaco");
//   }
// };