// ATIVIDADE 6 - FORMATAR PESSOA

// Pensamento lógico:
// Recebo um objeto contendo nome, idade e profissão.
// Depois, pego essas informações usando o nome das propriedades.
// Por fim, monto uma frase utilizando esses dados.
//
// Entrada: objeto com nome, idade e profissão
// Processamento: juntar as informações em uma frase
// Saída: frase formatada
//
// Dificuldade: Fácil.
// Motivo: basta acessar as propriedades do objeto
// e colocá-las dentro de uma string.

function formatarPessoa(pessoa) {
    return `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.profissao}.`;
}

// Teste
let pessoa = {
    nome: "Gabriel",
    idade: 16,
    profissao: "estudante"
};

console.log(formatarPessoa(pessoa));