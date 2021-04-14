/*01 - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.*/
  const meuNome = 'Erika'
    
  for (let i = 0; i < 5; i++) {
    console.log(`Dentro do bloco de código: ${meuNome}`)
  }

  console.log(`Fora do bloco de código: ${meuNome}`)

/*02 - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?*/

  const minhaIdade = () => {
    let idd = 29 //interna
    console.log(idd)
  }
  minhaIdade()

  // console.log(idd)


/*03 - Crie um objeto "car" com as seguintes propriedades e métodos:
    - nome, que recebe o nome do carro;
    - marca, que recebe a marca do carro;
    - cor, que recebe 3 cor para o carro;
    - estaCorrendo, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - corre, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - pare, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getcorMessage, que é um método que retorna a mensagem  
    //   "O NOME_DO_CARRO está disponível nas cor COR_01, COR_02 e COR_03".*/

    let car = {
      nome: 'Gol',
      marca: 'Volkswagen',
      cor: ['preto', 'dourado', 'vermelho'],
      estaCorrendo: false,
      corre () {
        this.estaCorrendo  = true
        return `O ${this.nome} está em movimento` 
      },
      pare () {
        this.estaCorrendo = false
        return `O ${this.nome} está parado`
      },
      obterMensagemCor () {
        const ultimoItem = this.cor[this.cor.length - 1]
        const cor = this.cor.join(', ').replace(ultimoItem, `e ${ultimoItem}`)

        return `O ${this.nome} está disponível nas cor ${cor}`
      }        
    }


/*04 - Faça o carro andar e exiba no console se ele realmente está em movimento.*/
  console.log(car.corre())
  console.log(car.estaCorrendo === true)

/* 05 - Faça o carro parar e exiba no console se ele realmente está parado.*/
console.log(car.pare())
console.log(car.estaCorrendo === false)

/*06 - Exiba, no console, a mensagem com as cor do carro.*/
console.log(car.obterMensagemCor())


/*07 - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.*/

  console.log(`O carro é um ${car['marca']} ${car['nome']}`)


