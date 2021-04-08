//Controle de fluxos: controle de blocos: sao pequenas partes executadas enquanto uma condição e verdadeira.
//Variaveis e escopo de blocos: E a area que o valor de uma variavel ta disponivel.


const age = 31 // escopo global(fora do escopo de bloco): pode ser acessada por todo o arquivo.

if (true) {
   const age = 41 //pode criar uma var com o mesmo nome, porem dentro de um outro escopo
   const name = 'Erika' //var escopo local 
   console.log(`Dentro do 1° bloco de código: ${age} ${name}`);

   if(true) {
       const age = 61
       console.log(`Dentro do 2° bloco de codigo? ${age}`)
       var string = 'oi'
   }
};

console.log(`Fora do bloco de código: ${age} ${string}`)
/*
let e const: São usadas para solucionar o problema de escopo de blocos.
Pois , po que era usando antes, o var , ele não obedecia os escopos de blocos.
*/