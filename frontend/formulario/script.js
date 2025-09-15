document.getElementById('formulario').addEventListener('submit', (event) => {
    const verificaSenha = document.getElementById('senha').value;
    if(verificaSenha.length < 8) {
        event.preventDefault();
        alert('A senha deve ter no minimo 8 caracteres.');
    } else {
        alert('Formulario enviado com sucesso!');
    }
});