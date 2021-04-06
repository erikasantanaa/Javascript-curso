/*01 - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.*/

  let cat = {
    name: 'Tônia',
    age: 2,
    color: 'Branco e mesclado',
    bestFriends: ['Oreo', 'Milk'],
    sound: function() {
      return 'miau'
    }
  }
  console.log(cat)

/*02 - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.
  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".*/
console.log(`Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "${cat.name}", "age", que recebeu "${cat.age}", "color", que recebeu "${cat.color}", "bestFriends", que recebeu um array com os itens "${cat.bestFriends[0]}" e "${cat.bestFriends[1]}", e "sound", que recebeu uma função que retorna "${cat.sound()}"`)

/*03  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.*/
cat.age += 2 

console.log(cat.age)


/* 04- Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.*/
  const adicAmigo = (amigo, objeto) => {
    objeto.bestFriends.push(amigo)
  }

  adicAmigo('Rabicho', cat)
  console.log(cat.bestFriends)  

/*05 - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.*/

  const adicionaCor = novaCor => {
    novaCor['color'] += ` e Amarelo`
  }

  adicionaCor(cat)

  const corPropriedade = cat['color']
  console.log(corPropriedade)

/*06 - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.*/

  const valorObjeto = value => typeof value === 'object'

  console.log(valorObjeto(cat))

/* 07- Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.
  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."*/

  let dog = {
    name: 'Lupita',
    age: 6,
    color: 'Branco e preto',
    bestFriends: ['Tinho', 'José'],
    sound: () => 'Wooof'
  }
  const aMenssagem = (cat, dog) => `A soma das idades de ${cat.name} e ${dog.name} é ${cat.age + dog.age}`

  const anosIdadeMenssagem = aMenssagem(cat, dog)
  console.log(anosIdadeMenssagem)


/*08 - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?*/

const isAnSUV = carro => [
  'Honda HR-V', 
  'Jeep Renegade', 
  'Ford EcoSport', 
  'Hyundai iX35'
].includes(carro)
  
  console.log(isAnSUV('Honda Civic'))
  console.log(isAnSUV('Ford EcoSport'))
  
  /*09- Crie uma função que recebe um parâmetro 'type';
    - Dentro da função, crie um objeto com as seguintes propriedades:
      - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
      - undefined, que recebe a mensagem 'Representa um valor não-setado.'
      - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
    - Se o valor que o parâmetro type receber corresponder à alguma das 3  
      propriedades, retorne a mensagem que a propriedade armazena;
    - Teste a função, exibindo no console a mensagem de cada propriedade. */
  
    const typeDefinido = type => {
      const obj = {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado.',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.'
      }
      return obj[type]
    }
    /*ou]:
      return {
        null: 'Seta, explicitamente, uma variável sem valor.',
        undefined: 'Representa um valor não-setado.',
        object: 'Arrays, Datas, Objetos literais, Funções, etc.'
      }[type]
    }
    
    */

    console.log(typeDefinido('null'))
    console.log(typeDefinido('undefined'))
    console.log(typeDefinido('object'))