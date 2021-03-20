function contar() {
    //let é uma var mas com escopo, quando ela sair da function ela nao vai valer nada
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'    
       // window.alert('[ERRO] Faltam dados!')  //se eu deixar algum dado em branca vai mostrar que falta dados.
    } else {
      res.innerHTML = 'Contando: '
      let i = Number(ini.value) //convertendo ini.value para numero
      let f = Number(fim.value) //convertendo fim.value para numero
      let p = Number(passo.value) //convertendo passo.value para numero
      if (p <= 0){
          window.alert('passo inválido! Considerando PASSO 1')
          p = 1
      }
      if (i < f) {
          //contagem crescente
          for(let c = i; c <= f; c += p){//c == contador e´uma var
                res.innerHTML += ` ${c} \u{1F449} ` //  \u{1F449} é o codigo do emoji do site https://unicode.org/emoji/charts/full-emoji-list.html (esse codigo so funciona entra crases)
           } 
      }else {
          //contagem regressiva
          for( let c = i; c >= f; c -= p) {
              res.innerHTML += `${c} \u{1F449}`
          }
      }
      res.innerHTML += `\u{1F3C1}` //emoji da bandeirinha 
 
    }
}