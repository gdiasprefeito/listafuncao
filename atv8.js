// ATIVIDADE 8 - AUTENTICAÇÃO

// Pensamento lógico:
// Primeiro, verifico se a senha possui pelo menos 6 caracteres.
// Depois, a função de autenticação chama a função validarSenha.
// Se a senha for válida, libero o acesso.
// Caso contrário, informo que a senha é muito curta.
//
// Entrada: usuário e senha
// Processamento: verificar o tamanho da senha
// Saída: mensagem de acesso concedido ou senha muito curta
//
// Dificuldade: Médio.
// Motivo: precisamos criar duas funções e uma delas precisa
// chamar a outra.

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

// Testes
console.log(autenticarUsuario("Gabriel", "123456"));
console.log(autenticarUsuario("Gabriel", "123"));