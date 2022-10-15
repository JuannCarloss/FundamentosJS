const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])
console.log(valores[0] + valores[3])
console.log(valores[0].toFixed(3))
console.log(valores[1].toString(2))

valores[4] = 10


console.log(valores[4])
console.log(valores)
console.log(valores.length)

/* Os exemplos acima são arrays
dentro de um array posso colocar a tipagem
que eu quiser, string, numero, etc */

/* dentro do array existe a função push
onde eu posso adicionar quantas coisas
eu quiser dentro do array*/

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores)

/*existe também a função pop que retira
o último valor dentro do array
também se usa delete + o índice que você quer 
remover*/

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)