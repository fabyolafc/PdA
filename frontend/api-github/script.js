function getApi() {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';

    const user = document.querySelector('#user').value;

    fetch(`https://api.github.com/users/${user}`)
        .then(async res => {
            if (!res.ok) {
                ul.innerHTML = '<li>Usuário não encontrado.</li>';
                return;
            }
            let data = await res.json();

            let li = document.createElement('li');

            li.innerHTML = `
                <img src="${data.avatar_url}" alt="Foto de ${data.name}" width="120" style="border-radius: 50%; margin-bottom: 16px;"><br>
                <strong>Nome:</strong> ${data.name || 'Não informado'} <br>
                <strong>Bio:</strong> ${data.bio || 'Não informado'} <br>
                <strong>Perfil:</strong> <a href="${data.html_url}" target="_blank">${data.html_url}</a>
            `;
            ul.appendChild(li);
        })
        .catch(e => {
            ul.innerHTML = '<li>Erro ao buscar usuário.</li>';
            console.log(e);
        });
}