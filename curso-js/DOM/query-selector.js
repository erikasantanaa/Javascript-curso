//QUERY SELECTOR 

const divSelector = document.querySelector('body > h1')

console.log(divSelector)


//QUERY SELECTOR ALL

const paragraphs = document.querySelectorAll('p')
    //somente 1 elemento p
console.log(paragraphs[0])

    //todos os elementos p
paragraphs.forEach(paragraphs => {
    console.log(paragraphs)
})

//BUSCAR OUTROS ELEMENTOS: onde tem a classe error
const errors = document.querySelectorAll('.error')

console.log(errors)