//forEach e (função)callbacks
const myFunc = callback => {
//o valor que ele vai receber e a declaração de uma função 
    const value = 77

    callback(value)    
} 
//essa funçao ta sendo atribuida como parametro
//a função myFunc foi declarada , e invocada com uma função por argumento
myFunc(number => {
    console.log(number)
}) 