
const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
    console.log('texto copiado')

})

const divBox = document.querySelector('.box')

divBox.addEventListener('mousemove', event => {
    divBox.textContent = `X ${event.offsetX} | Y ${event.offsetY}` 

})

document.addEventListener('wheel', event => {
    console.log(event.pageX, event.pageY)
    
})