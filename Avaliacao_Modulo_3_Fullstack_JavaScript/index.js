const express = require("express");
const Conn = require("./models/conn/tarefa.conn");

const app = express();

app.use(express.json());
const porta = 3000;

Conn("localhost", "27017", "tarefas");

const todo = require("./routers/tarefa.routes");
app.use("/tarefa", todo);

app.listen(porta, () => {
  console.info(`app rodando em : http://localhost:${porta}/`);
});
