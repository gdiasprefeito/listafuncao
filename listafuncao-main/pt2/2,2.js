function verificarOrcamento(valorProduto,saldoDisponivel){
    return saldoDisponivel >= valorProduto;
}



let valor = Number(prompt("Digite o preço do produto:"));
let saldo = Number(prompt("Digite seu saldo disponível:"));

if (verificarOrcamento(valor , saldo)) {
    console.log("Você tem saldo suficiente para comprar o produto!");
} else {
    console.log("Saldo insuficiente para comprar o produto.");
}