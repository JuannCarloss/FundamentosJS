const a = {name: 'teste'}
console.log (a)

const b = a

console.log (b)

b.name = 'mudança'

console.log(b)
console.log(a)

/*         ATRIBUIÇÃO POR REFERENCIA

mesmo mudando o valor de name da constante A
dentro da constante B, quando printada, mostra
o valor modificado, pois eu adiciono um endereço
a ser mostrado pela variavel, e quando mudado
mesmo na B muda na A também*/