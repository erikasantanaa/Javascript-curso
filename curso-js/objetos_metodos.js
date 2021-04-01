//adicionando metodos
//funções criadas dentro de um objeto são metodos:

let user = {
    name: 'Erika', // propriedade ou chave, string é um valor da propriedade
    age: 28,
    email: 'erika@exemplo.com',
    city: 'Belém',
    blogPosts: ['Brigadeiro', 'Coxinha'],
    login: function() {
        console.log('Usuario logado')    
    },
    logout: function() {
        console.log('Usuario deslogado')
    }
}
//metodos são funçoes que sao criados dentro de um objeto.
user.login()
user.logout()


// ex: const name = 'Erika'
// name.toUpperCase() //metodo