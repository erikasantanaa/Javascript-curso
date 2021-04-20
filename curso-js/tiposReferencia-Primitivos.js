/*
#Tipos primitivos                    #tipos de referencia

-Numbers                              -Todos os tipos de objetos
-Strings                               -Objetos literais
-Booleans                               -Arrays
-Null                                   -Funções
-Undefined                                -Datas
-Symbol                                   -Todos os outros objetos
-BigInt
*/


//Tipos primitivos
let scoreOne = 50
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

//Tipos referencias
let userOne = { name: 'Erika', age: 28 }
let userTwo = userOne

console.log(userOne, userTwo)

userTwo.age = 30

console.log(userOne, userTwo)