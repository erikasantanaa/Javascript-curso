//Obtendo e setando atributos (consumindo de um html)

const link = document.querySelector("a");

//valor do link
// console.log(link.getAttribute("href"));

//modificar ou setar o valor
link.setAttribute("href", "https://www.google.com/");

link.innerText = "Google Erika";

//exemplo para modificar uma class
const paragrafo = document.querySelector("p");

console.log(paragrafo.getAttribute("class"));

paragrafo.setAttribute("class", "sucess");

//setar um atributo que não existe no elemento

paragrafo.setAttribute("style", "color: green");