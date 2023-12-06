var desc = document.getElementById('description')
var text = desc.innerHTML
var index = 0

const escrever = () => {
    desc.innerHTML = desc.innerHTML.replace('|', '')

    if(text.length > index) {
        if(index == 0) {
            desc.innerHTML = text.charAt(index)
        } else{
            desc.innerHTML += text.charAt(index)
        }

        desc.innerHTML += '|'

        index++
        setTimeout(escrever, 100)
    }
}

escrever()


function rolarAteMinhaSecao(e) {
    var botao = document.getElementById(e);
    if (botao) {
        botao.scrollIntoView({ behavior: 'smooth' });
    }
}