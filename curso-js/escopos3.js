//Escopos

function myfunc () {
    let cat = 'Zeca'
    const age = 3
    var color  = 'cinza'
    console.log(cat, age, color)
}

myfunc()

console.log('-------------------------------------------')

// dois escopos

const dog = 'Pastor-Alemão'

function dogWatch () {
    let dog = 'Samoieda'
    console.log(dog)
}

dogWatch()
console.log(dog)

//escopo de funções : let e const tem regras diferentes de var.
 if (true) {
     const dragon = 'Balerion'
     console.log(dragon)
 }

//  console.log(dragon) //erro: dragon está dentro do escopo do if não pode ser acessada.

 if (true) {
     var cat = 'Tônia'
    //  console.log(cat)
 }

 console.log(cat) //o var foge do escopo
//Escopo Léxico:

const osVingadores = () => {
    const homemDeFerro = 'Tony'

    const thanos = () => {
        //const homemDeFerro = 'Capitão America'

        const thanosEAmora = () => {
            console.log(homemDeFerro.toUpperCase())
        }
        
        thanos()
    }
}
