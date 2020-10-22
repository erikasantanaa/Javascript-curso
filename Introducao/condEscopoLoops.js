/* IF: O if(se) é um comando que
 permite executar um código apenas
 se uma condição entre parênteses
 for verdadeira (true). */

/* ELSE: O comando ELSE (senão)
 serve para executarmos um trecho
 de código quando o IF for falso.*/
let nome = 'Maria';

if (nome == 'Maria') {
    console.log('Acesso permitido');
} else {
    console.log('Acesso Negado!');
}

/* ELSE IF: é interessante usar o
 comando ELSE IF (senão se). */
let cidade = 'Belem';

if (cidade == 'Belem') {
    console.log('Cidade de Belém');
} else if (cidade == 'Rio de janeiro') {
    console.log('Cidade Rio de Janeiro');
} else if (cidade == 'Sao Paulo') {
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

switch (codigo) {
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
function testarTamanho(valor) {
    if (valor > 15) {
        return 'maior';
    } else if (valor < 3) {
        return 'menor';
    } else {
        return 'na faixa';
    }
}

//EXERCICIO:
/*
Crie uma estrutura de controle (If ou Switch) dentro da função mudarPropriedade
que efetue a lógica pedida nos comentários.
Dica: Se precisar, reveja as aulas de switch e if/else; não esqueça do break; 
os case precisam ter strings com letras minusculas.
*/

let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};


function mudarPropriedade(nomePropriedade, novoValor) {
    switch (nomePropriedade) {
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if (novoValor > 1) {
                carro.rodas = novoValor;
            }
            else {
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            if (novoValor > 0) {
                carro.portas = novoValor;
            } else {
                return "Minino de portas precisa ser 1"
            }
            break;

        case "cor":
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"
            if (novoValor == "cinza" || novoValor == "preto" || novoValor == "vermelho") {
                carro.cor = novoValor;
            } else {
                return "cor invalida";
            }
            break;

        case "ano":
            // criar um case para o "ano"
            // alterar o ano do carro para o ano informado
            // se o ano for igual a 2019, alterar o estado para "novo" 
            // senao alterar o estado para "usado"
            carro.ano = novoValor;
            if (novoValor == 2019) {
                carro.estado = "novo";
            } else {
                carro.estado = "usado";

            }
            break;

        default:
            return "invalida"
            // retornar a fraase "Propriedade invalida";
            return "propriedade invalida";
    }

    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
    return "Alteracao concluida"
}