const peso1 = 1.0
const peso2 = Number('2.0')

console.log (peso1, peso2)

//isInteger é para saber se o número é inteiro

console.log (Number.isInteger(peso1))
console.log (Number.isInteger(peso2))

//toFixed serve para dar limitação de casas decimais a algum numero

const numero1 = 9.543
const numero2 = 7.457
const total = numero1 * numero2

console.log(total)
console.log(total.toFixed(3))