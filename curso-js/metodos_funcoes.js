//Metodos são funções que estão associadas ao objetos ou tipo de dado em si.
//Metodos e funções em essencia são a mesma coisa, mas com nomes e formas diferentes de serem criados.
const name = 'Érika'

//funções
const sayHi = () => 'Oi'

const greet = sayHi()
console.log(greet)

//métodos
const nameInUpperCase = name.toUpperCase()
console.log(nameInUpperCase)