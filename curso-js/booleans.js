// Booleans e comparações
console.log(true, false, 'true', 'false')

console.log('------------------')
//Metodos podem retornar booleans
const email = 'erika@santana.com.br'
const includes = email.includes('erika')
console.log(includes)

const names = ['Erika', 'Alice', 'Wendell', 'Sara']
const namesIncludes = names.includes('caco')
console.log(namesIncludes)

console.log('------------------')
//Operadores de comparação
const age = 31
const name = 'erika'

console.log(age == 31)
console.log(age == 35)
console.log(age != 35)
console.log(age > 31)
console.log(age < 31)
console.log(age <= 31)
console.log(age >= 31)

console.log('------------------')

console.log(name == 'erika')
console.log(name == 'Erika')
console.log(name != 'tonia')
console.log(name > 'Erika')
console.log(name < 'Tonia')