//armazenar a função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a * b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável
// "=>" funciona igual o comando function

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(3, 2))

