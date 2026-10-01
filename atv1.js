// ATIVIDADE 1 - ÁREA DO RETÂNGULO

// Pensamento lógico:
// Primeiro, recebo a base e a altura do retângulo.
// Depois, multiplico a base pela altura.
// Por fim, retorno o resultado da área.
//
// Entrada: base e altura
// Processamento: base * altura
// Saída: valor da área
//
// Dificuldade: Fácil.
// Motivo: basta fazer uma multiplicação simples.

function calcularAreaRetangulo(base, altura) {
    let area = base * altura;

    return area;
}

// Teste
console.log(calcularAreaRetangulo(10, 5));