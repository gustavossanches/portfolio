
function rolarAteMinhaSecao(e) {
  var botao = document.getElementById(e);
  if (botao) {
    botao.scrollIntoView({ behavior: 'smooth' });
    botao.scrollTo()
  }
}



// efeito de digitação do texto inicial
const texto = 'Aqui você poderá saber um pouco mais sobre mim, o que estudo e como trabalho.'
const tag = document.getElementById("description")

const texto2 = 'Olá! Me chamo Gustavo e sou desenvolvedor.'
const tag2 = document.getElementById("texto-principal")

function efeitoTeclado(texto, tag, tempo, letraDelay, parar) {
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
  arrayLetras.forEach((e, i) => {
    if (i === letraDelay) {
      atrasoAcumulado += 3000 - tempo  
    }
    setTimeout(() => {
      textoAtual += e
      tag.innerText = textoAtual
      tag.appendChild(cursor)
    }, atrasoAcumulado + (tempo * i))
  })
}
  // efeitoTeclado(texto, tag, 50, 7)
  efeitoTeclado(texto2, tag2, 50, 4)









//OPACIDADE DO HEADER CONFORME MOUSE E SCROLLY

// const header = document.getElementsByTagName("header")[0];
// let mouseHeader = true

// header.addEventListener('mouseenter', () => {
//   mouseHeader = true
//   // console.log('entrou')
//   // console.log(mouseHeader)

// })
// header.addEventListener('mouseleave', () => {
//   mouseHeader = false
//   // console.log(mouseHeader)
//   // console.log('saiu')
// })


// window.onscroll = function () {
//   // console.log(header)
//   if (window.scrollY > 50 && !mouseHeader) {
//     header.classList.add("header_opaco");
//   } else {
//     header.classList.remove("header_opaco");
//   }
// };