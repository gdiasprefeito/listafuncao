// sem usuario 

function celsiusParaFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8) + 32;

    return fahrenheit;
}
console.log(celsiusParaFahrenheit(10));

//com usuario 


function celsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

let celsius = Number(prompt("Digite a temperatura em Celsius:"));

console.log(celsiusParaFahrenheit(celsius));



//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
//lembrete tem como criar a variavel e ja mecer nela 
