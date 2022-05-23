const myFunc = function (name, lastName){
    console.log(`Oi, ${name} ${lastName}`)
}

myFunc('Erika', 'Maria')

const myName =  function (name = 'Maria', lastName = 'Santana'){
    console.log(`Oi, ${name} ${lastName}`)
}

myName()
myName('Alice')
myName('Ana', 'Nunes')

const double = function (number) {
    return number * 2
}
const result = double(3)

const showResult = function(value) {
    return `O resultado é: ${value}`
}
console.log(showResult(result))