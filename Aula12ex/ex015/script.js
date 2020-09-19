function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')  //colocando imagem dinamicamente pelo js
        img.setAttribute('id' , 'foto')  //continuaçao da linha de cima   
        if (fsex[0].checked) {
            gênero = 'Homem'
            if  (idade >=0 && idade < 10){
                //criaça 
                img.setAttribute('src', 'foto-bebe-h.png')
            } else if ( idade < 21) {  
                //jovem 
                img.setAttribute('src', 'foto-jovemh.png')
            }else if (idade < 50) { 
                //adulto
                img.setAttribute('src', 'foto-Adultoh.png')
            } else {
                //idoso 
                img.setAttribute('src', 'foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if  (idade >=0 && idade < 10){
                //criaça 
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if ( idade < 21) {
                //jovem 
                img.setAttribute('src', 'foto-jovemf.png')
            }else if (idade < 50) { 
                //adulto
                img.setAttribute('src', 'foto-adulta.png')
            } else {
                //idoso 
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign = 'center' //levou o texto para o centro 
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}