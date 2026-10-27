function calcularSubtotalItem(item) {

    return item.preco * item.quantidade;
}


function calcularTotalCarrinho(carrinho) {

    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {

        total += calcularSubtotalItem(carrinho[i]);
    }

    return total;
}


// Exemplo:
let carrinho = [
    {
        nome: "Mouse",
        preco: 50,
        quantidade: 2
    },

    {
        nome: "Teclado",
        preco: 100,
        quantidade: 1
    },

    {
        nome: "Headset",
        preco: 200,
        quantidade: 1
    }
];
