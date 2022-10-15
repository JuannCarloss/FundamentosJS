function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//um array vazio, ele assume os valores entregues anteriormente
console.log(rand([]))
//aqui dei dois valores
console.log(rand([1, 20]))
//aqui dei valor somente para o segundo
console.log(rand([, 20]))
