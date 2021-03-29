
function newButton(text, callback) {
    const body = document.querySelector('body')
    const button = document.createElement('button')
    button.textContent = text;

    callback(button)
    
    body.insertAdjacentElement('beforeend', button)

    return button
}


newButton('login', (button) => {
    button.style.cssText = `
        font-size: 30px;
        margin: 10px
    `;

    button.addEventListener('click', () => {
        console.log('Oi!')
    })
})

newButton('signup', (button) => {
    button.style.cssText = `
        font-size: 30px;
        color: #895
    `
})

