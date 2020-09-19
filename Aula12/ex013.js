var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
No JS vai começar a contar do 0, por isso na hr de mostrar o dia,
vai mostrar o dia anterior.
*/

console.log(diaSem)

// diaSem = 0  da pra usar assim tbm , escolhendo o dia

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
        case 3:
        console.log('Quarta')
        break
        case 4:
        console.log('Quinta')
        break
        case 5:
        console.log('Sexta')
        break
        case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido!')
        break
}