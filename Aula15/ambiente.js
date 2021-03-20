let num = [5, 8, 9, 3,1]
console.log(num)
console.log(`Nosso vetor é o ${num}`)
num [5] = 6 //cria mais um elemento na nossa var
console.log(`acrecentei mais o '6' ${num}`)
num.push(10) //o JS acrescenta o valor automaticamente sem ter que especificar qual é a ultima casa,nao precisa encrever esse codigo antes, pode colocar direto no console
let pos = num.indexOf(8) //mostra a posiçao do valor
console.log(`O valor 8 está na posição ${pos}`)
num.sort()// coloca os elementos em ordem crescente, nao precisa encrever esse codigo antes, pode colocar direto no console
console.log(`Em ordem crescente ${num.sort()}`)
//num.length //mostra quantos elementos tem na nossa variavel, nao precisa encrever esse codigo antes, pode colocar direto no console
console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(num[3]) //mostra o elemento da posiçao 
console.log(`O primeiro valor do vetor é ${num[0]}`) // primeiro valor do vetor


