/*function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 20, min: 1}))*/

/*function dado({min = 1, max = 20}) {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

console.log(dado({}))*/

/*var dado = {
    min: 1,
    max: 20
}
const {max, min} = dado

console.log(Math.floor(Math.random()* (max - min) + min))*/

var [min, max] = [1, 20]
console.log(Math.floor(Math.random() * (max - min) + min))