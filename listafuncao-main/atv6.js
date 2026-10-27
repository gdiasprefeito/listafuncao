
function formatarPessoa(pessoa) {
    return `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.profissao}.`;
}

//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
// estudar mais como concatenar palavras com variaveis para demonstrar para o usuario 
let pessoa = {
    nome: "Gabriel",
    idade: 16,
    profissao: "estudante"
};

console.log(formatarPessoa(pessoa));