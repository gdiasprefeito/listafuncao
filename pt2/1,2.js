
function calcularJurosSimples(capital, taxa, tempo) {
    let juros = capital * (taxa / 100) * tempo;
    return juros;
}

let capital = Number(prompt("Digite o valor do capital:"));
let taxa = Number(prompt("Digite a taxa de juros (%):"));
let tempo = Number(prompt("Digite o tempo em meses:"));

let resultado = calcularJurosSimples(capital, taxa, tempo);

console.log("O valor dos juros é: R$", resultado);
