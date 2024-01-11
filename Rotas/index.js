const { Router } = require("express");
const {
  Home,
  Livros,
  LivrosId,
  PostLivro,
  LivrosPatch,
  LivrosDel,
} = require("../Controladores");

const router = Router();
router.get("/Home", Home);
router.get("/Livros", Livros);
router.get("/Livros/:id", LivrosId);
router.post("/livrosPost", PostLivro);
router.patch("/LivrosPatch/:id", LivrosPatch);
router.delete("/LivrosDel/:id", LivrosDel);

module.exports = router;
