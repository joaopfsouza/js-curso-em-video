window.onload = () => {
    var btn = document.querySelector('input#btn')
    btn.addEventListener('click', verificar)
}

function FaixaEtaria(idade) {
    if (idade <= 10) {
        return 'bb'
    } else if (idade <= 25) {
        return 'jv'
    } else if (idade <= 55) {
        return 'at'
    } else {
        return 'id'
    }
}


function verificar() {

    var txtano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    var anoAtual = new Date().getFullYear()
    var fsex = document.getElementsByName('radsex')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (txtano.value.length != 0 && Number(txtano.value) < anoAtual) {

        var idade = anoAtual - txtano.valueAsNumber
        var faixa = FaixaEtaria(idade)

        if (fsex[0].checked) {
            genero = 'Homem'
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }
        
        img.setAttribute('src',`img/${faixa}-${genero}.png`)

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `${genero} com ${idade} anos.<br>`
        resultado.appendChild(img)



    } else {
        alert('Tente novamente')
    }


}


