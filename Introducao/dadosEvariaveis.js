/* let: Declara uma variável com
escopo de bloco (veremos sobre
 escopo de bloco mais adiante):
let outroNumero = 5;*/

/*  const: Declara uma variável apenas
 de leitura. Após atribuir um valor
 a uma const, não será possível
 altera-lo : */
const ola = 'Ola mundo';

//limites de numeros:
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/* null ainda é um valor e
 undefined é quando o JavaScript
 não sabe qual o tipo de dado */
console.log(null === undefined);

// Objetos ,para alterar, basta usar carro["nome"] = "Pink"; ou:
let carro = {
    rodas: 4,
    cor: "azul",
    nome: "blue"
}
carro.rodas = 2;
console.log(carro);

// function: passando valores:
let somar = function(valor1, valor2){
    let resultado = valor1 + valor2;
    console.log(resultado);
}

somar(5, 5);

//Pode  inserir uma function dentro de um variavel:
let olaMundo = function(){
    console.log("Ola mundo!");
    console.log("Ola mundo, novamente!");
}
olaMundo();

//exercicio Objeto: Exibir o numero 55:
let obj = {
    obj2: {
        vetor: [1, 2, {valor: 55}]
    }
};
console.log(obj['obj2']['vetor'][2].valor);

//exercicio: Função 
function revisao(valor1, valor2, valor3){
    let outroValor = valor1 + 2;
    let maisUm = valor2 + valor3;

    let vetor = [valor3, valor1, maisUm, valor2, outroValor];

    console.log(`A soma de ${vetor[2]} está certa? Ou ${vetor[1] + 2} = ${vetor[4]} parece melhor?`);
}
revisao(2, "5", "zero");

