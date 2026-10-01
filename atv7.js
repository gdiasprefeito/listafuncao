// ATIVIDADE 7 - PROCESSAR VENDA

// Pensamento lógico:
// A primeira função calcula o desconto de uma venda.
// A segunda função verifica se o valor é maior que 100.
// Se for maior que 100, chama a função de desconto com 10%.
// Se não for, mantém o valor original.
//
// Entrada: valor da venda e percentual de desconto
// Processamento: calcular o desconto e verificar o valor da venda
// Saída: valor final da venda
//
// Dificuldade: Médio.
// Motivo: é necessário criar duas funções e fazer uma função
// chamar a outra.

function aplicarDesconto(valor, percentual) {
    let desconto = valor * (percentual / 100);
    let valorFinal = valor - desconto;

    return valorFinal;
}

function processarVenda(valorBruto) {
    if (valorBruto > 100) {
        return aplicarDesconto(valorBruto, 10);
    } else {
        return valorBruto;
    }
}

// Testes
console.log(processarVenda(200));
console.log(processarVenda(80));