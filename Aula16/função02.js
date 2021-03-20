function soma(n1, n2) {
    return n1 + n2 
}

console.log(soma(2, 5)) //valores de n1 e n2


function soma(n1=0, n2=0) { //se eu nn colocar um valor para n1 ou n2 ele vai valer 0. 
    return n1 + n2 
}

console.log(soma(4))

