const form = document.getElementById("form-card");
const inputTopico = document.getElementById("topico");
const inputDescricao = document.getElementById("descricao");
const containerCards = document.getElementById("container-cards");
const conselhoTexto = document.getElementById("conselho");

/* EVENTO */
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const topico = inputTopico.value;
  const descricao = inputDescricao.value;

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${topico}</h3>
    <p>${descricao}</p>
  `;

  containerCards.appendChild(card);

  inputTopico.value = "";
  inputDescricao.value = "";
});

/* FETCH - FRASE MOTIVACIONAL */
fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => {
    conselhoTexto.textContent = "💡 Conselho: " + data.slip.advice;
  })
  .catch(() => {
    conselhoTexto.textContent = "Não foi possível carregar o conselho 😢";
  });