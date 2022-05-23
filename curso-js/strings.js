const email = 'erika@gmail.com';

const firstName = 'Erika';
const lastName = 'Santana';
const fullName = `${firstName} ${lastName}`;

console.log(fullName[0]);

console.log(fullName.length);

console.log(fullName.toUpperCase());

const result = fullName.toLowerCase();
console.log(result, fullName);

const index = email.indexOf('@');
console.log(index)

const conta = 'cursojavascript@erika.com.br'

const lastIndexOfA = conta.lastIndexOf('a');
console.log(lastIndexOfA);

const emailSlice = conta.slice(3, 5);
console.log(emailSlice)

const emailReplace = conta.replace('curso', 'aula');
console.log(emailReplace);