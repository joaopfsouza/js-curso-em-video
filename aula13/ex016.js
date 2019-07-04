function comerPizza(){
    
    var qtdFatia = 16

    while(qtdFatia>0){
        console.log(`Falta ${qtdFatia}`)
        qtdFatia--

    }

    console.log('Acabou')

    do{
        qtdFatia++
        console.log(`Fazendo ${qtdFatia}`)
    }while(qtdFatia<16)

}


comerPizza()