const euroEmReal = 6.20;
const dolarEmReal = 5.30;

function menuConversao() {

    let opcao;

    while (opcao !== "5") {

        opcao = prompt(
            "MENU DE CONVERSÃO\n" +
            "1 - Real para Euro\n" +
            "2 - Euro para Real\n" +
            "3 - Real para Dólar\n" +
            "4 - Dólar para Real\n" +
            "5 - Fechar programa\n\n" +
            "Escolha uma opção:"
        );

        if (opcao === "1") {

            let valor = Number(prompt("Digite o valor em reais:"));
            let resultado = valor / euroEmReal;

            alert("Valor em euros: € " + resultado.toFixed(2));

        } else if (opcao === "2") {

            let valor = Number(prompt("Digite o valor em euros:"));
            let resultado = valor * euroEmReal;

            alert("Valor em reais: R$ " + resultado.toFixed(2));

        } else if (opcao === "3") {

            let valor = Number(prompt("Digite o valor em reais:"));
            let resultado = valor / dolarEmReal;

            alert("Valor em dólares: US$ " + resultado.toFixed(2));

        } else if (opcao === "4") {

            let valor = Number(prompt("Digite o valor em dólares:"));
            let resultado = valor * dolarEmReal;

            alert("Valor em reais: R$ " + resultado.toFixed(2));

        } else if (opcao === "5") {

            alert("Programa encerrado!");

        } else {

            alert("Opção inválida!");
        }
    }
}
