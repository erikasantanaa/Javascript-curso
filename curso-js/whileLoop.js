//While loop: executa um codigo que nem o for, a unica diferença e o modo da escrita.
//ele so precisa da Condição. A i  do While ja tem que ser declarada fora do loop.


/* exemplo de for
for (let i =  0 ; i < 5 ; i++) {
    console.log(`Dentro do loop: R${i}`)
}*/

//while loop
// let i = 0

// while (i < 5){
//     console.log(`Dentro do loop: R${i}`)
//     i++ //evita ficar preso no loop infinito
// }

//Outro exemplo
const names = ['Jobs', 'Hopper', 'Turing']
let i = 0

while (i < names.length){
    console.log(names[i])
    i++
}

