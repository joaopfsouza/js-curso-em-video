var numberList = []
var result = document.querySelector("#report")


window.onload = () => {
    btnAdd = document.querySelector('#btnAdd')
    btnFim = document.querySelector('#btnFim')

    btnAdd.addEventListener('click', AddElemet)
    btnFim.addEventListener('click', Report)


}

function AddElemet() {

    var inputElement = document.querySelector("#addNum")
    element = inputElement.valueAsNumber
    result.innerHTML = ""

    if (!isNaN(element) && !inList(element,numberList) && inRange(element)) {

        tab = document.getElementById("resultado")

        opt = document.createElement('option')
        opt.text = `Valor ${element} adicionado`
        numberList.push(element)
        tab.appendChild(opt)

    } else {
        alert('Insira um número')
    }

    inputElement.value=''
    inputElement.focus()

}

function Report() {

    if (numberList.length != 0) {

        var rel = `Quantidade: ${qtdElement(numberList)}<br>
        Máximo:  ${maxElement(numberList)}<br>
        Mínimo:  ${minElement(numberList)}<br>
        Soma:    ${sumElement(numberList)}<br>
        Média:   ${mediaElement(numberList)}<br> `

        result.innerHTML = rel
    } else {
        alert('Insira valores')
    }


}

function qtdElement(vetor) {
    return vetor.length
}

function maxElement(vetor) {
    vetor.sort()
    return vetor[vetor.length - 1]
}

function minElement(vetor) {
    vetor.sort()
    return vetor[0]
}

function sumElement(vetor) {
    var sum = 0
    for (let i in vetor) {
        sum += vetor[i]
    }

    return sum

}

function mediaElement(vetor) {

    return sumElement(vetor) / (vetor.length)
}

function inList(value,vetor) {
    if (vetor.indexOf(value) == -1) {
        return false
    } else {
        return true
    }
}

function inRange(value) {

    if(value>0 && value<=100){
        return true
    }else{
        return false
    }
    
}