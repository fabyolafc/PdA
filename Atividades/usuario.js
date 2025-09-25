// Desafio 1: Extraia e imprima apenas o nome e a cidade do primeiro usuário usando destructuring.
// Desafio 2: Crie um novo array `usuariosDoNorte`, cópia do original, mas adicionando um novo usuário. Use o spread operator. (Novo usuário: { nome: "Ana", cidade: "Manaus", ... })
// Desafio 3: Crie um novo objeto `beatrizAtualizada` com todas as infos originais, mas com o email "bia.dev@exemplo.com". Use o spread operator.
// [Para ir além 🛸] Desafio 4: Crie uma função `mostrarInteresses(usuario)` que use destructuring no parâmetro para extrair `nome` e `interesses` e imprima uma frase com eles.

const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

const { nome, cidade } = usuarios[0];
console.log(`Nome: ${nome}, Cidade: ${cidade}`);

const usuariosDoNorte = [...usuarios, {nome: "Fabyola", idade: 21, email: "f@gmail.com", cidade: "Virgem da Lapa", interesses: ["Cantar", "Dançar", "Comer"]}];
console.log(usuariosDoNorte);

const beatrizAtualizada = {...usuarios[1], email: "bia.dev@exemplo.com"}
console.log(beatrizAtualizada);

function mostrarInteresses(usuarios) {
  for (let i = 0; i < usuarios.length; i++) {
    const {nome, interesses} = usuarios[i];
    console.log(`Os interesses de ${nome} são: ${interesses.join(", ")}`);
  }
}
mostrarInteresses(usuarios);

