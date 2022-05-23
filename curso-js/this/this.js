let user = {
    name: 'Erika',
    age: 28,
    email: 'erika@exemplo.com',
    city: 'Belém',
    blogPosts: ['Coxinha', 'Brigadeiro', 'Coca-cola'],
    login: function () {
        console.log('Usuario logado')
    },
    logout: function () {
        console.log('Usuario deslogado')
    },
    logBlogPosts: function () {
        console.log(`${this.name} escreveu os seguintes posts:`)
        this.blogPosts.forEach(post => {
            console.log(post)
        })
        
    }
}

user.logBlogPosts()
