const { getAllBooks, getAllBooksForId } = require("../servicos");

function Home(req, res) {
  res.send("Bem vindo a sua bliblioteca");
}

function Livros(req, res) {
  const livros = getAllBooks();
  res.send(livros);
}
function LivrosId(req, res) {
  const id = req.params.id;
  const livros = getAllBooksForId(id);
  res.send(livros);
}

module.exports = {
  Livros,
  Home,
  LivrosId,
};
