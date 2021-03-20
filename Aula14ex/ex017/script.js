function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por fazor, digite um número!')   
    } else{
        let n = Number(num.value)
        let c = 1 //c == contador
        tab.innerHTML = '' //limpa a tabuada para usar de novo 
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //item selecionado ex: que o mause esta selecionando, no js nn faz diferença colocar pq ele ja mostra, mas em outras linguagens pecisa
            tab.appendChild(item) //appendChild== adicionar um elemento filho
            c++
        }
    }
    

}