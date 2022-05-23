let user = {
    name: 'Erika',
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

user.login()
user.logout()