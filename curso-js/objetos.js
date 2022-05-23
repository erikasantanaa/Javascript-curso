let user = {
    name: 'Erika',
    age: 28,
    email: 'erika@exemplo.com',
    city: 'Belém',
    blogPosts: ['Brigadeiro', 'Coxinha']
}


user.name = 'Maria'

console.log(user.name)


user['email'] = 'maria@exemplo.com'
console.log(user['email'])


const key = 'email'

console.log(user[key])

console.log(typeof user)

