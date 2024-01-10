const { Router } = require("express");
const { Home, Livros, LivrosId } = require("../Controladores");

const router = Router();
router.get("/Home", Home);
router.get("/Livros", Livros);
router.get("/Livros/:id", LivrosId);

module.exports = router;
