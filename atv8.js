
function validarSenha(senha) {
    if (senha.length >= 6) {
        return true;
    } else {
        return false;
    }
}

function autenticarUsuario(usuario, senha) {
    if (validarSenha(senha)) {
        return `Acesso concedido para ${usuario}`;
    } else {
        return `Senha muito curta para o usuário ${usuario}`;
    }
}

//teste para colca no console sempre chamar a função e 
// colocar os numeros desejados sem a necessidade de pedir 
// para o usuario digitar 
console.log(autenticarUsuario("Gabriel", "123456"));
console.log(autenticarUsuario("Gabriel", "123"));