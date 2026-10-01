// ATIVIDADE 5 - SOMAR ELEMENTOS DE UM ARRAY

// Pensamento lógico:
// Primeiro, crio uma variável para guardar a soma.
// Depois, percorro todos os elementos do array usando um for.
// A cada repetição, adiciono o valor atual à soma.
// No final, retorno o total.
//
// Entrada: um array de números
// Processamento: percorrer o array e somar os valores
// Saída: soma de todos os elementos
//
// Dificuldade: Médio.
// Motivo: é necessário entender como percorrer um array
// usando um laço de repetição.

function somarElementos(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }

    return total;
}

// Teste
console.log(somarElementos([10, 20, 30, 40]));