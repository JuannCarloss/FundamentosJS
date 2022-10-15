let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//exclamação funciona como uma negação, uma negação equivale a um false, duas equivalem a um true
isAtivo = 1
console.log(!!isAtivo)

console.log ('os verdadeiros...')
console.log (!!3) //qualquer numero, menos o 0
console.log(!!-1)
console.log(!!' ')//qualquer string
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log ('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('pra finalziar')
console.log (!!('' || null || 0 || ' '))
//se tiver um valor true, anula todos os outros false