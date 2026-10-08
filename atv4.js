

function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc <= 24.9) {
        return "Peso normal";
    } else {
        return "Sobrepeso";
    }
}

//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
// pergunta pro gilberto se tem que criar a variavel antes de mecher com ela ou
//  se o function já cria ela ou ela foi criada no let e funciona por ser uma função
console.log(calcularIMC(70, 1.75));