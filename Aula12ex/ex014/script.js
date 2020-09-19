function carregar () {
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem') 
   var data = new Date()
   //var hora = data.getHours() //pega a hr atual
   var hora = 7 //pega a hr que eu colocar vai mudando as fts dependendo da hr
   msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 00 && hora < 12){
   //BOM DIA!
   img.src = 'fotomanha.png'
   document.body.style.background = '#e2cd9f' //mudou a cor de fundo 
} else if (hora >= 12 && hora <= 18) {
    //BOA TARDE 
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
} else{
    //BOA NOITE 
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
}
