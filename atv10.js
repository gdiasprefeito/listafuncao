// ATIVIDADE 10 - ANÁLISE DE UMA TURMA

// Pensamento lógico:
// Primeiro, crio uma função para verificar se uma nota é suficiente
// para aprovação.
// Depois, crio uma função que percorre todos os alunos e conta
// quantos foram aprovados.
// Por último, crio a função principal, que cadastra 4 alunos,
// coloca os dados em um array e mostra a quantidade de aprovados.
//
// Entrada: nome e nota de 4 alunos
// Processamento: verificar cada nota e contar os aprovados
// Saída: quantidade de alunos aprovados
//
// Dificuldade: Difícil.
// Motivo: essa questão junta vários conteúdos:
// funções, arrays, objetos, repetição, condição e prompt.

function verificarAprovacao(nota) {
    if (nota >= 60) {
        return true;
    } else {
        return false;
    }
}

function contarAprovados(listaAlunos) {
    let aprovados = 0;

    for (let i = 0; i < listaAlunos.length; i++) {
        if (verificarAprovacao(listaAlunos[i].nota)) {
            aprovados++;
        }
    }

    return aprovados;
}

function executarAnalise() {
    let listaAlunos = [];

    // Cadastro dos 4 alunos
    for (let i = 0; i < 4; i++) {
        let nome = prompt("Digite o nome do aluno " + (i + 1));
        let nota = Number(prompt("Digite a nota de " + nome));

        let aluno = {
            nome: nome,
            nota: nota
        };

        listaAlunos.push(aluno);
    }

    let totalAprovados = contarAprovados(listaAlunos);

    console.log("Total de alunos aprovados: " + totalAprovados);
}

// Executa o programa
executarAnalise();