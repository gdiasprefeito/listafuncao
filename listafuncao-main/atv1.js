//Parte com o usuario 
function calcularAreaRetangulo(base, altura) {
    let area = base * altura;

    return area;
}
let base = Number(prompt("Digite o valor da base do retangulo :"));
let altura = Number(prompt("Digite o valor da altura  do retangulo :"));


/*parte sem usuario 

function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

console.log(calcularAreaRetangulo(10, 5));

*/


//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
console.log(calcularAreaRetangulo(10, 5));