// ATIVIDADE 4 - CÁLCULO DO IMC

// Pensamento lógico:
// Primeiro, calculo o IMC usando peso / (altura * altura).
// Depois, verifico em qual faixa o resultado está.
// Por fim, retorno a classificação correspondente.
//
// Entrada: peso em kg e altura em metros
// Processamento: peso / (altura * altura)
// Saída: classificação do IMC
//
// Dificuldade: Médio.
// Motivo: além de calcular o IMC, é necessário usar condições
// para descobrir a classificação.

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc <= 24.9) {
        return "Peso normal";
    } else {
        return "Sobrepeso";
    }
}

// Teste
console.log(calcularIMC(70, 1.75));