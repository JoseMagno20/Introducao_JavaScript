let amigo = {nome:"José",sexo:"M",peso:"100",
$engõrdar(p=0){
    console.log("engordou")
    this.peso += p
}

}
amigo.$engõrdar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
