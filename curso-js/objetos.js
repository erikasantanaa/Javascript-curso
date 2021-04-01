/*Objetos: Possibilita criar estruturas de dados, que representam certos elementos 
do nosso codigo ou aplicaçoes web.

Propriedades
ex: e-mail - nome de usuario - idade.
ex: titulo - conteudo - autor.

Metodos (ações - funções)
ex: Login - logout.
ex: publicar - despublicar - deletar.*/

//Criando um OBJETO LITERAL -
let user = {
    name: 'Erika', // propriedade ou chave, string é um valor da propriedade
    age: 28,
    email: 'erika@exemplo.com',
    city: 'Belém',
    blogPosts: ['Brigadeiro', 'Coxinha']
}

// modificando um objeto.
user.name = 'Maria'

console.log(user.name)

//com colchetes
user['email'] = 'maria@exemplo.com'
console.log(user['email'])

//Inserindo uma variavel: Na maioria das vezes, nao se precisa dela. o ponto nao funciona (user.email = 'xxxx')
const key = 'email'

console.log(user[key]) //e a mesma coisa que: user['email']

console.log(typeof user)

//Funções chamadas fora de um objetos são chamadas de funções, e funções chamadas dentro de um objeto são chamadas de metodos.