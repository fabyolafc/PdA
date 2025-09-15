document.getElementById('btnAtualizar').addEventListener('click', () => {
    const contador = document.getElementById('contador');
    contadorAtual = Number(contador.innerText);
    contadorAtual++;
    contador.innerText = contadorAtual;
})
