window.onload = () => {
    var btn = document.querySelector("#btn")
    btn.addEventListener('click', contar)
}


function contar() {

    let img = document.createElement("img");
    img.setAttribute('id', 'emoticon')
    img.setAttribute('src', 'img/passo.jpg')

    let inicio = document.querySelector("#numInicio").valueAsNumber
    let fim = document.querySelector("#numFim").valueAsNumber
    let passo = document.querySelector("#numPasso").valueAsNumber
    let resultado = document.querySelector('#resultado')

    img.style.width = '50px'
    img.style.height = '50px'
    img.style.transform = "scaleX(-1)"



    if (isNaN(inicio)) {
        inicio = 1
    }


    if (isNaN(fim)) {
        fim = 10
    }


    if (isNaN(passo)) {
        passo = 1
    } 
    
    
    
    if (passo == 0) {
        alert(`Passo não pode ser ${passo}`)
    } else {

        resultado.innerHTML = ''


        if(fim<inicio){
            for (let i = inicio; i >= fim; i -= passo) {
                //resultado.append(img)
                resultado.innerHTML += `Corre  ${i} \u{1F449} `
    
    
            }

        }else{
            for (let i = inicio; i <= fim; i += passo) {
                //resultado.append(img)
                resultado.innerHTML += `Corre  ${i} \u{1F449} `
    
    
            }
        }

        
        resultado.innerHTML += '\u{1F3C1}'
        //img.setAttribute('src', 'img/chegada.jpg')
       // resultado.append(img)

    }




}