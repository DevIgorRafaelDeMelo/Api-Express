const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("BdLivros,json"));
}

function getAllBooksForId(id) {
  const livros = JSON.parse(fs.readFileSync("BdLivros,json"));
  const livro = livros.filter((livro) => livro.id === id);
  return livro;
}

module.exports = {
  getAllBooks,
  getAllBooksForId,
};
