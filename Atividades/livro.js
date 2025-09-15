// Banco de dados
let biblioteca = [];
// OBJETO LITERAL
const livro1 = {
  titulo: "O Hobbit",
  autor: "J.R.R Tolkien",
  anoLancamento: 1937,
};
function adicionarLivro(titulo, autor, anoLancamento) {
  const livro = {
    titulo: titulo,
    autor: autor,
    anoLancamento: anoLancamento,
  };
  biblioteca.push(livro);
}
adicionarLivro("O hobbit", "J.R.R Tolkien", 1937);
adicionarLivro("Dom Casmurro", "Machado de Assis", 1899);
adicionarLivro("1984", "George Orwell", 1949);
adicionarLivro("A Revolução dos Bichos", "George Orwell", 1945);
adicionarLivro("Cem Anos de Solidão", "Gabriel García Márquez", 1967);
adicionarLivro("Orgulho e Preconceito", "Jane Austen", 1813);
adicionarLivro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943);
adicionarLivro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997);
adicionarLivro("Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", 1954);

function listarLivros() {
  console.log("\n--------------Lista de livros na biblioteca:--------------");    
  biblioteca.forEach(livro => {
    console.log(`- ${livro.titulo} por ${livro.autor} (${livro.anoLancamento})`);
  })
}
listarLivros();

function encontrarLivro(autorDesejado) {
  const livrosEncontrados = biblioteca.filter(
    (livro) => livro.autor === autorDesejado
  );
  console.log(
    `\nEncontrados esses livros do autor ${autorDesejado}:`
  );
  return livrosEncontrados;
}
const saida = encontrarLivro("J.R.R Tolkien");
console.log(saida);

function deletarLivro(titulo) {
  const indice = biblioteca.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
  if (indice !== -1) {
    biblioteca.splice(indice, 1);
    console.log(`\nLivro "${titulo}" deletado com sucesso!`);
  } else {
    console.log(`\nLivro "${titulo}" não encontrado.`);
  }
}

deletarLivro("O Hobbit");
listarLivros();
