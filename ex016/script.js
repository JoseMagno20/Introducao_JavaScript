function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 ||Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
       // res.innerHTML = `Idade calculada ${idade}`
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if(fsex[0].checked){
        genero = 'Homem'
        if(idade>=0 && idade< 10){
            //criança
            img.setAttribute('src','garoto.png')
        }else if (idade< 21){
            //jovem
            img.setAttribute('src', 'jovemH.png')
        }else if (idade < 50) {
            //adulto
            img.setAttribute('src','homem.png')
        }else if (idade< 120) {
            //idoso
            img.setAttribute('src', 'velhobone.png')
        } else {
            //velhao
            img.setAttribute('src','Velhao.png')
            alert("ESSE É O HOMEM MAIS VELHOR DO MUNDO!")
        }

       } else if(fsex[1].checked) {
        genero = 'Mulher'
        if(idade>=0 && idade< 10){
            //criança
            img.setAttribute('src', 'menina.png')
        }else if (idade< 21){
            //jovem
            img.setAttribute('src','jovemM.png')
        }else if (idade < 50) {
            //adulto
            img.setAttribute('src','adultaM.png')
        }else {
            //idoso
            img.setAttribute('src','velhinha.png')
        }
       }
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.style.textAlign = 'center'
       res.appendChild(img)
    }
}