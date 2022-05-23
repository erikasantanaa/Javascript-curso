
let listaDePessoasAprovadas = [
    'erika@exemplo.com',
    'alice@exemplo.com',
    'wendell@exemplo.com',
    'sara@exemplo.com',
    'tonia.oreo@exemplo.com'
];

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado.`);
};

listaDePessoasAprovadas.forEach((item, posicao, array) => {
    enviarEmail(item);
    console.log(`Sua posição é: ${posicao}`);
    console.log(`Quantidade de pessoas é: ${array}`)
})