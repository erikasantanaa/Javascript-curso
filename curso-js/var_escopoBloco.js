const age = 31

if (true) {
   const age = 41 
   const name = 'Erika'  
   console.log(`Dentro do 1° bloco de código: ${age} ${name}`);

   if(true) {
       const age = 61
       console.log(`Dentro do 2° bloco de codigo? ${age}`)
       var string = 'oi'
   }
};

console.log(`Fora do bloco de código: ${age} ${string}`)