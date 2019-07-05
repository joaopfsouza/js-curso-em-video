let amigo ={
    nome:'Jose',
    sexo:'M',
    peso: 98.8,
    engordar(p=0){
        this.peso +=p
    }

}

console.log(amigo)
console.log(`Peso ${amigo.peso}`)
amigo.engordar(2)
console.log(`Peso ${amigo.peso}`)