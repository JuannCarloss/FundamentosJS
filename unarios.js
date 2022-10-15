let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)


console.log(++num1 === num2--)
/*no exemplo acima, vai dar true pois o incremento
antes do operando tem prioridade acima da comparação
assim, num2-- ainda era 2, pois o decremento veio
depois do operando */
