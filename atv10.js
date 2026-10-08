
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

//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
executarAnalise();