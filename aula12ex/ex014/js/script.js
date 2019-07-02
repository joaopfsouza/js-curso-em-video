function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
   
    if (hora >= 6 && 12 > hora) {
        img.src = 'img/01.png'
        document.body.style.backgroundColor = '#a6c0a7'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/02.png'
        document.body.style.background= '#d8a167'

    } else {
        img.src = 'img/03.png'
        document.body.style.backgroundColor = '#2b5392'
    }
}


window.onload = () => {
    carregar()
}