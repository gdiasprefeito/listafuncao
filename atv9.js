// ATIVIDADE 9 - AVALIAÇÃO DO ALUNO

// Pensamento lógico:
// Primeiro, calculo a média das notas usando uma função.
// Depois, a função avaliarAluno chama a função de média.
// Se a média for maior ou igual a 60, o aluno está aprovado.
// Caso contrário, ele está reprovado.
//
// Entrada: objeto com nome e array de notas
// Processamento: somar as notas e dividir pela quantidade
// Saída: "Aprovado" ou "Reprovado"
//
// Dificuldade: Médio.
// Motivo: precisamos trabalhar com arrays, objetos e duas funções.

function calcularMediaArray(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

    let media = soma / notas.length;

    return media;
}

function avaliarAluno(aluno) {
    let media = calcularMediaArray(aluno.notas);

    if (media >= 60) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

// Teste
let aluno = {
    nome: "Gabriel",
    notas: [70, 80, 60]
};

console.log(avaliarAluno(aluno));