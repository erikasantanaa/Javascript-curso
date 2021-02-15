const password = '12345678'

if (password.length >= 12){
    console.log('senha muito forte')
} else if (password.length >= 8){
    console.log('essa senha tem 8 ou mais caracteres')
} else {
    console.log('a senha deve conter 8 pu mais caracteres')
}

//operadores lógicos - "OU" || e "E" &&

const passw = '12345678'

if (passw.length >= 12 && passw.includes('1')){
    console.log('senha muito forte')
} else if (passw.length >= 8 || passw.includes('1') && passw.length >= 5){
    console.log('senha forte')
} else {
    console.log('a senha deve conter 8 pu mais caracteres')
}