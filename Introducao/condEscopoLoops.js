/* IF: O if(se) é um comando que
 permite executar um código apenas
 se uma condição entre parênteses
 for verdadeira (true). */

/* ELSE: O comando ELSE (senão)
 serve para executarmos um trecho
 de código quando o IF for falso.*/
let nome = 'Maria';

if (nome == 'Maria'){
    console.log('Acesso permitido');
} else {
    console.log('Acesso Negado!');
}

/* ELSE IF: é interessante usar o
 comando ELSE IF (senão se). */
let cidade = 'Belem';

if(cidade == 'Belem'){
    console.log('Cidade de Belém');
} else if(cidade == 'Rio de janeiro'){
    console.log('Cidade Rio de Janeiro');
} else if(cidade == 'Sao Paulo'){
    console.log('Cidade de São Paulo');
} else {
    console.log('Outra cidade')
}

/* SWITCH: O switch serve para
 executar um código de acordo com
 diversos possíveis resultados.  é a alternativa
perfeita ao if/else caso existam
muitas comparações de um valor 

CASE: para cada possibilidade, é
necessário termos um “case”.

BREAK: O comando “break” serve para
encerrar a leitura do switch. Sem
ele código do case abaixo será
executado

DEFAULT: O default é nosso “else” e
executará quando nenhum case
corresponder ao valor.

OBS: Comparação: O switch compara usando
o ===, então tanto o valor quanto o
tipo do dado precisam ser iguais.*/

let codigo = '0';

switch (codigo){
    case 0:
        console.log('0');
        break;
    case 1:
        console.log('um');
        break;
    default:
        console.log('n/a');
}

//EXERCICIO:
/*
Complete a função testarTamanho de forma que quando for passada um numero, ela faça o seguinte:
- retorne o texto 'maior' se for maior que 15;
- retorne o texto 'menor' se for menor que 3;
- retorne o texto 'na faixa' se for maior ou igual que 3 e menor  ou igual a 15.
obs: texto com letras minusculas.
*/
function testarTamanho(valor){
    if (valor > 15){
        return 'maior';
    } else if (valor < 3){
        return 'menor';
    } else {
        return 'na faixa';
    }
 }
