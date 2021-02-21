//break e continue: fazer o loop parar quando chegar em 100

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue //ela  ignora o codigo abaixo, a i é icrementada, e o proximo item do array e executado
    }

    console.log(`sua pontuação: ${scores[i]}`);

    if(scores[i] === 100){
        console.log('Parabens voce atingiu a pontuação maxima');

        break //ele pára o codigo for
    }
}