// ATIVIDADE 3 - CELSIUS PARA FAHRENHEIT

// Pensamento lógico:
// Recebo a temperatura em Celsius.
// Depois, aplico a fórmula F = (C * 1.8) + 32.
// Por fim, retorno o resultado em Fahrenheit.
//
// Entrada: temperatura em Celsius
// Processamento: (Celsius * 1.8) + 32
// Saída: temperatura em Fahrenheit
//
// Dificuldade: Fácil.
// Motivo: basta aplicar a fórmula fornecida na questão.

function celsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}

// Teste
console.log(celsiusParaFahrenheit(25));