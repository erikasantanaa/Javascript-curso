/*  01
  - Faça com que o texto do h1 do index.html seja exibido
  com todas as letras maiúsculas.
*/

const title = document.querySelector('h1')

console.log(title)

title.textContent = title.textContent.toUpperCase()


/*02
  - Adicione, na ul vazia do index.html, os números do 
  array "numbers" abaixo;
  - Cada número deve estar dentro de uma <li> com a 
  classe "number".
*/

const numbers = [ 53, 24, 3, 8, 1, 6, 57, 80, 77, 98, 55 ]
const ul = document.querySelector('.numbers')

    //refatorado
const insertNumberIntoUl = number => {
  ul.innerHTML += `<li class="number">${number}</li>`
}

numbers.forEach(insertNumberIntoUl) // puxando o array para aparcer na tela

/*
// console.log(li.textContent) // puxando array para aparecer no console  
  03

  - Modifique as cores dos números dentro da ul da seguinte forma:
    - Se o número é par, ele deve ser exibido na cor "lightblue";
    - Se o número é ímpar, exiba-o na cor "pink".

    -> quebrar as tarefas:
    1- exibir os números de cada li no console;
    2- * se o resto do n° dividido por 2 é 0, ele é par. (exibir so os n° pares)
    3- * 
*/

const lis = document.querySelectorAll('.number')

const changeLiColor = lis.forEach(li => {
  const isEven = Number(li.textContent) % 2 === 0  //convertendo a string p/ number 


  if (isEven) {
    li.style.color = 'lightblue'
    return
  }

  li.style.color = 'pink'
})



/*
  04

  - Adicione a classe "body-background" no corpo do index.html;

  P.s: a classe "body-background" já está declarada no style.css.

  obs: duas formas para inserir body:
  1- const body = document.querySelector('body')

  2- const body = document.body
*/

const body = document.querySelector('body')

// console.log(body)

body.classList.add('body-background')



/*
  05

  - Adicione o link 
    https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo no href  
    do link do index.html.
*/

const repoLink = document.querySelector('a')

repoLink.setAttribute('href', 'https://github.com/roger-melo-treinamentos/curso-de-js-roger-melo')

/*
  06

  - Exiba o novo valor do atributo href do link no console.
*/

console.log(repoLink.getAttribute('href'))
/*
  07

  - Exiba, no console, um objeto com todas as propriedades CSS que podem 
  ser manipuladas via JS no h1.
*/
console.log(title.style)


/*
  08

  - Remova a classe "body-background", do elemento body.
*/

body.classList.remove('body-background')

/*
  09

  - Se o link da página possuir uma classe "link", remova-a;
  - Não utilize o método remove() para fazer isso.
*/

repoLink.classList.toggle('link')
repoLink.classList.toggle('link')