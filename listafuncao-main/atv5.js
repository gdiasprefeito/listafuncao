

function somarElementos(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }

    return total;
}

//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
console.log(somarElementos([10, 20, 30, 40]));