

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

//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
console.log(processarVenda(200));
console.log(processarVenda(80));