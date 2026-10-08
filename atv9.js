

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

//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar conferir para ver a correçõ do gilberto
let aluno = {
    nome: "Gabriel",
    notas: [70, 80, 60]
};

console.log(avaliarAluno(aluno));