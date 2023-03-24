let num = [5,8,2,9,3]
num[5] = 1 //adiciona um numero na posição indicada
num.push(7) // adiciona o numero na ultima posição
//num.length é pra ver o tamanho da array 
num.sort() // coloca em ordem crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor possui ${num.length} posições!`)
console.log(num[3])
/*for(let pos =0; pos< num.length; pos++){
    console.log(num[pos])
}
*/
for(let pos in num){ // forma mais simplificada
    console.log(` O vetor é ${num[pos]}`)
}

  let pos =  num.indexOf(6) // buscar valor na posição indicaca
    console.log(num.indexOf(6))