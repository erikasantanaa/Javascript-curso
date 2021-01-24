/*1. 
- Armazene a palavra 'Tom' em uma constante "tom";
- Armazene a palavra 'Hanks' em uma constante "firstTom";
- Armazene a palavra 'Cruise' em uma constante "secondTom";
- Declare uma constante "myFavoriteTom" que recebe nome, espaço, e sobrenome 
    do Tom que você mais gosta;
- Exiba a "myFavoriteTom" no console do browser.*/

const tom = 'Tom'
const firstTom = 'Hanks'
const secondTom = 'Cruise'
const myFavoriteTom = ` ${tom} ${secondTom}`
console.log(myFavoriteTom)

console.log('-------------------------------------------------------------')

/*2.
- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, 
    em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console do browser;
- Exiba no console do browser a quantidade de caracteres que a constante 
    "programmingLanguage" possui;
*/
const programmingLanguage = 'JavaScript'
const js = `${programmingLanguage[0]}${programmingLanguage[4]}`
console.log(js, programmingLanguage.length)

console.log('-------------------------------------------------------------')

/*3.
- Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras
 que a constante "mozilla" armazena;
- As iniciais não devem ser digitadas manualmente;
- Exiba a "mdn" no console do browser;
*/

const mozilla = 'Mozilla Developer Network'
const mdn = `${mozilla[0]}${mozilla[8]}${mozilla[18]}`
console.log(mdn)

console.log('-------------------------------------------------------------')

/*4.
- Exiba no console a última letra da string que a "randomWord" (abaixo) armazena,
 mas com a condição a seguir;
- Ao invés de inserir manualmente a posição do último caractere, faça com que a 
obtenção da última letra funcione para qualquer palavra que a "randomWord" receber;
- Dica: utilize a propriedade ".length".
*/
let randomWord = 'Araponga'




