const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("BdLivros.json"));
}

function getAllBooksForId(id) {
  //Converte o Arquivo BdLivros para uma const para leitura "readFileSync"
  const livros = JSON.parse(fs.readFileSync("BdLivros.json"));
  //Faz a Verificação filtrando o const Livros e verificando o ID de cada para retorna o livro correspondente
  const livro = livros.filter((livro) => livro.id === id);
  if (livros === livro) {
    return false;
  }
  return livro;
}

function postNewBook(params) {
  const livros = JSON.parse(fs.readFileSync("BdLivros.json"));
  //Cria Um novo Array para junstar a nova variavel e o array dos livros Ja existentes
  const NewArrayOfBooks = [...livros, params];
  //Rescreve o Bdlivros com o novo Array com o livro atualizado
  fs.writeFileSync("BdLivros.json", JSON.stringify(NewArrayOfBooks));
}

function getAllBooksForIdAtt(id, body) {
  //Converte o Arquivo BdLivros para uma const para leitura "readFileSync"
  let livros = JSON.parse(fs.readFileSync("BdLivros.json"));
  //Faz a Verificação filtrando o const Livros e verificando o ID de cada para retorna o livro correspondente
  const livro = livros.findIndex((livro) => livro.id === id);
  const conteudo = { ...livros[livro], ...body };

  livros[livro] = conteudo;
  console.log(livros);
  fs.writeFileSync("BdLivros.json", JSON.stringify(livros));
}
function getAllBooksForIdandDel(id) {
  let livros = JSON.parse(fs.readFileSync("BdLivros.json"));
  const livro = livros.filter((livro) => livro.id !== id);
  fs.writeFileSync("BdLivros.json", JSON.stringify(livro));
}

module.exports = {
  getAllBooks,
  getAllBooksForId,
  postNewBook,
  getAllBooksForIdAtt,
  getAllBooksForIdandDel,
};
