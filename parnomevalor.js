//par nome/valor
/*aqui a constante saudacao esta no escopo global
do codigo, assim no primeiro log, ela sai com o valor abaixo*/ 
const saudacao = 'opa big'


/*ja nesse exemplo, a constante esta dentro
do escopo da function, com o log executando a
function, sai que o valor colocado nela*/
function exec() {
    const saudacao = 'falaa big'
    return saudacao
}

/*aqui um exemplo de constante com varios valores
dentro, e um dos valores com mais valores dentro */
const cliente = {
    nome: 'ruan',
    idade: 22,
    peso: 76,
    endereco: {
        rua: 'etc eticetera',
        numero: 123,
        cor: 'verde'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

