require("dotenv").config();
const express = require("express");
const Conn = require("./models/conn/tarefa.conn");

const app = express();

app.use(express.json());

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
Conn(db_url, db_user, db_pass, db_data);

const porta = 3000;

const todo = require("./routers/tarefa.routes");
app.use("/tarefa", todo);

app.listen(process.env.PORT || porta, () => {
  console.info(`app rodando em : http://localhost:${porta}/`);
});
