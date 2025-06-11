document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoUsuario = document.getElementById('usuario');
    const campoSenha = document.getElementById('senha');

    const valorUsuario = campoUsuario.value.trim();
    const valorSenha = campoSenha.value.trim();

    if (valorUsuario === '') {
        alert('Campo Usuário é obrigatório');
        return;
    }

    if (valorSenha === '') {
        alert('Campo Senha é obrigatório');
        return;
    }

    if (valorUsuario === 'admin' && valorSenha === '1234') {
        alert('Login foi realizado com sucesso');
    } else {
        alert('Usuário ou senha inválidos.');
    }
});