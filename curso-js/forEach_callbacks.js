//callbacks (função por argumento)
const myFunc = callback => {
//o valor que ele vai receber e a declaração de uma função 
    const value = 77

    callback(value)    
} 
//a função myFunc foi declarada , e invocada com uma função por argumento
myFunc(number => {
    console.log(number)
}) 

//forEach (para cada): esse metodo funciona como for, mas de uma forma mais elegante. O forEach pode ser desacoplada, diferente do for.

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook']

const logArrayInfo = (socialNetworks, index, array) => {
    console.log(index, socialNetworks, array)
}

socialNetworks.forEach(logArrayInfo)

//funções de callbacks: são funções que passam como argumentos para outras funções.