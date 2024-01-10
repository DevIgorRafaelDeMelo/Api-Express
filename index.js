const express = require("express");
const router = require("./Rotas");

const app = express();
app.use(express.json());

const port = 8000;

app.use("/", router);

app.listen(port, () => {
  console.log("Funfando");
});
