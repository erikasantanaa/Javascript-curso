//a palavra-chave this:
//O this acessa todo o escopo da variavel. 
//Ele representa o contexto do codigo atual ta sendo executado. E dependendo de onde ou como a gente usa o this, o valor dele vai mudar. 
//Se usa o this na raiz do documento, ele vai referenciar o contexto global Window objetc.
//Dentro do objeto, ele representa a variavel.
//Para usar o this em um metodo , se usa uma function () {}, pq assim ele esta referenciando o objeto. 
//Sintaxe da function decoration (shation) : () {}.


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
