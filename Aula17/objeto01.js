/*let amigo = {nome:'jose', sexo: 'M', peso:85.4, engordar (p){}} //podemos fazer assim ou da maneira de baixo
console.log(typeof amigo)*/


/*let amigo = {nome:'jose',
 sexo: 'M', 
 peso:85.4, 
 engordar (){

 }}
console.log(amigo)
console.log(amigo.nome)//mostra so o nome*/

//Ex
let amigo = {nome:'jose',
 sexo: 'M', 
 peso:85.4, 
 engordar (p=0){
    console.log('Endordou')
    this.peso += p
 }}
console.log(amigo)
console.log(amigo.nome)
amigo.engordar(2) //mandei engordar 2, foi la na funçao
console.log(`${amigo.nome} pesa ${amigo.peso} kg`) //podemos fazer assim tbm
