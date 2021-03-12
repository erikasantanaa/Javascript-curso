//Criando um objeto literal/ adicionando metodos (uma propriedade armazena uma função)

//Funções chamadas fora de um objetos são chamadas de funções, e funções chamadas dentro de um objeto são chamadas de metodos.

let user = {
    name: 'Erika',
    age: 28,
    email: 'erika@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function() {
        console.log('usuario logado')
    },
    logout: function() {
        console.log('usuario deslogado')
    }
};

user.login()

user.logout()






/*Como modificar um obj:
user.age = 32;
console.log(user.age)

console.log(user['name'])
user['name'] = 'José'

console.log(user['name'])
//vantagem de usar [ ]
const key = 'email';
console.log(user[key])*/




