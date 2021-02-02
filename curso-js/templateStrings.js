const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

//Usando o template Strings

// const postMessage = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`
// console.log(postMessage);

//criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>Autor: ${postAuthor}</p>
    <span>Este post tem ${postComments} comentarios</span>
`
console.log(html);