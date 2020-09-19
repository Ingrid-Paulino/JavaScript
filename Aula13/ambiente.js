/*
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
console.log('tudo bem?')
Dessa forma é muito mais trabalhoso para ficar repetindo algo
PIOR SOLUÇAO DE TODAS
*/

// FORMA MUITO MAIS PRATICA PARA REPETIR ALGO 
// CODIGO DE CIMA TEM A MESMA FUNCIONALIDADE QUE O DE BAIXO
// FORMA 1
//TESTA PRIMEIRO E EXECUTA DEPOIS
var c = 1
while (c <= 6){
    console.log('Tudo bem?')
    c++  //c = c + 1
}
/* EX:2
var b = 1
while (b <= 10){
    console.log(`Passo ${b}`)
    b++  //b = b + 1
}
*/

//PRIMEIRO EXECUTA E DEPOIS TESTA
//FORMA 2
var c = 1
do {
    console.log('Tudo ok?')
    c++  //c = c + 1
} while (c <= 6)


