// ATIVIDADE 2 - NÚMERO PAR

// Pensamento lógico:
// Para descobrir se um número é par, verifico o resto da divisão
// dele por 2.
// Se o resto for 0, o número é par.
// Caso contrário, ele é ímpar.
//
// Entrada: um número
// Processamento: número % 2
// Saída: true para par ou false para ímpar
//
// Dificuldade: Fácil.
// Motivo: usamos apenas o operador % para verificar o resto.

function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Testes
console.log(ehPar(10));
console.log(ehPar(7));