var hora = new Date().getHours();
var hora = 7

console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 6 && hora<12) {
    console.log("Bom Dia")
} else if (hora>=12 && hora<=18) {
    console.log("Boa Tarde")
}else{
    console.log("Boa Noite")
}