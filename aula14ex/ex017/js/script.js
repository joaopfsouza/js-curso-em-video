window.onload = () => {
    document.getElementById('btn').addEventListener('click', tabuada)
}

function tabuada() {

    let mult = document.querySelector('#numTab').valueAsNumber
    let result = document.querySelector('#resultado')

    if (isNaN(mult)) {
        alert('Selecione um numero')

    } else {
        result.innerHTML = ''

        for (let i = 0; i <= 10; i++) {
            let opt = document.createElement('option')
            opt.text = `${mult} X ${i} = ${i*mult}`
            opt.value = `tab${i}`
            result.appendChild(opt)
        }
    }










}