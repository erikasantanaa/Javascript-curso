//validar username do form
const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event => {
    event.preventDefault()

    const username = event.target.username.value
    const usernameRegex = /^[a-zA-Z]{6,12}$/
    const isAvalidUsername = username.test(username)

    if (isAvalidUsername) {
        feedback.textContent = 'username válido =)'
        return
    }
    
    feedback.textContent = 'o username deve conter entre 6 a 12 caracteres e apenas letras'
})