var agora = new Date()
var horario = agora.getHours()
console.log(`São ${horario} horas.`)
if(horario<=11) {
    console.log("Bom dia!")
} else if(horario <= 17){
    console.log('Boa tarde!')
}else {
    console.log('Boa noite')
} 
