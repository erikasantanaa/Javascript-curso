//inteiros e decimais
const radius = 10;
const pi = 3.14;

//operadores aritimeticos
const area = pi * radius ** 2;
console.log(area); //314

//ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2;
console.log(crazyOperation); //245

//operadores de incremento e decremento
let postLikes = 10;
//    postLikes = postLikes + 1;
postLikes++
postLikes--
console.log(postLikes);

//operadores addition, subtraction, multiplication e divisivel
//     postLikes = postLikes + 10;  ( ou -=, *=, /= )
postLikes += 10;
console.log(postLikes); //20

//NaN - not a number
console.log(7 / 'oi'); //NaN

//concatenação de string com número
const likesMessage = `O post tem ${postLikes} de likes`;
console.log(likesMessage); //o resultado é tudo em strings