
function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
//Lembra cabeção colocar sempre console.log e % é se dividir por x = 0 for par 
console.log(ehPar(10));
console.log(ehPar(7));