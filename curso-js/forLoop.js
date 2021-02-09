//O proposito do loop é executar um pedaço de codigo repetidamente
// O porcesso de percorrer um array (Iteração : todas vez que o codigo e executado )

 for (let i =  0 ; i < 5 ; i++) {
     console.log(`Dentro do loop: R${i}`)
 }

 console.log('Loop concluído')

 //for loop
const names = ['Linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++){
    const HTMLTemplate = `<p>${names[i]}</p>`
    console.log(HTMLTemplate)
}

