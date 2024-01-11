const {
  getAllBooks,
  getAllBooksForId,
  postNewBook,
  getAllBooksForIdAtt,
  getAllBooksForIdandDel,
} = require("../servicos");

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
function PostLivro(req, res) {
  try {
    const NewBook = req.body;
    postNewBook(NewBook);
    res.send(NewBook);
  } catch (error) {
    res.send(error);
  }
}

function LivrosPatch(req, res) {
  const id = req.params.id;
  const AttNewBook = req.body;
  getAllBooksForIdAtt(id, AttNewBook);
  res.send(AttNewBook);
}

function LivrosDel(req, res) {
  const id = req.params.id;
  getAllBooksForIdandDel(id);
  res.send("Deletado");
}

module.exports = {
  Livros,
  Home,
  LivrosId,
  PostLivro,
  LivrosPatch,
  LivrosDel,
};
