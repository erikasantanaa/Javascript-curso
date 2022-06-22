//validar username do form
const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-Z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
    event.preventDefault()
    
    const isAvalidUsername = testUsername(event.target.username.value)

    if (isAvalidUsername) {
        feedback.textContent = 'username válido =)'
        return
    }
    
    feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e apenas letras'
})

//validar em tempo real
form.username.addEventListener('keyup', event => {
    const isAvalidUsername = testUsername(event.target.value)

    if (isAvalidUsername) {
        form.username.setAttribute('class', 'success')
        return
    }

    form.username.setAttribute('class', 'error')
})
