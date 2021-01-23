/*1. 
- Armazene a palavra 'Tom' em uma constante "tom";
- Armazene a palavra 'Hanks' em uma constante "firstTom";
- Armazene a palavra 'Cruise' em uma constante "secondTom";
- Declare uma constante "myFavoriteTom" que recebe nome, espaço, e sobrenome do Tom que você mais gosta;
- Exiba a "myFavoriteTom" no console do browser.*/

const tom = 'Tom'
const firstTom = 'Hanks'
const secondTom = 'Cruise'
const myFavoriteTom = ` ${tom} ${secondTom}`

console.log(myFavoriteTom)

console.log('-------------------------------------------------------------')

/*2.
- Armazene a palavra 'JavaScript' em uma constante "programmingLanguage";
- Armazene a junção das letras "J" e "S", da programmingLanguage, em uma constante "js";
- As letras não devem ser digitadas manualmente;
- Exiba a "js" no console do browser;
*/
const programmingLanguage = 'JavaScript'
const js = programmingLanguage.slice(0, 5)

console.log(js)

console.log('-------------------------------------------------------------')

/*3.
- Armazene, em uma constante "mdn", a junção das letras iniciais das 3 palavras que a constante "mozilla" armazena;
- As iniciais não devem ser digitadas manualmente;
- Exiba a "mdn" no console do browser;
*/