
const ul = document.querySelector('ul')
const button = document.querySelector('button')


button.addEventListener('click', () => {
    const li = document.createElement('li')
    
    li.textContent = 'Novo item'
    ul.prepend(li)
} )

/*ao verificar o nodeName no console do event-target, 
se tem a LI como resposta, então, se event.target for
igual a 'LI' , remove */
ul.addEventListener('click', event => {
    const clickedElement = event.target 

    if (clickedElement.nodeName === 'LI') {
        clickedElement.revome()
    }

    // console.log(event)
})
