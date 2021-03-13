//Argumentos, parâmetros e default parameters

//passando argumentos para os parâmetros name, lastName:
const myFunc = function (name, lastName){
    console.log(`Oi, ${name} ${lastName}`)
}

myFunc('Erika', 'Maria')

const myName =  function (name = 'Maria', lastName = 'Santana'){
    console.log(`Oi, ${name} ${lastName}`)
}

myName()  //Aqui o underfined recebe o valor que está atribuido no parametro
myName('Alice')  //O segundo argumento é preenchido pelo parametro LastName
myName('Ana', 'Nunes') //Ele substituí os parametros

//Retornar valores
const double = function (number) {
    return number * 2
}
const result = double(3) //armazena o valor que tem na double, e pode ser usado. 


//usando o valor da function double 
const showResult = function(value) {
    return `O resultado é: ${value}`
}
console.log(showResult(result))