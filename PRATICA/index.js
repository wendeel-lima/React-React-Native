const express = require("express");
const Conn = require("./models/conn/conn");
const app = express();

Conn("localhost", "27017", "musicas");

const porta = 3000;

app.listen(porta, () => {
  console.info(`App rodando em http://localhost:${porta}`);
});
