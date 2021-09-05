const express = require("express");
const mongoose = require("mongoose");
const Filmes = require("./models/filmes.model");
const app = express();

mongoose.connect("mongodb://localhost:27017/filmes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const filme2 = new Filmes({
//   nome: "Homem-Aranha: Sem Volta Para Casa",
//   urlImagem:
//     "https://viciados.net/wp-content/uploads/2021/08/Spider-Man-No-Way-Home-1536x864.jpg",
//   sinopse: `O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta.`,
//   urlTreiller: `<iframe width="560" height="315" src="https://www.youtube.com/embed/EZo8V4XgzPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
// });

// filme2
//   .save()
//   .then(() => {
//     console.log("Filme Salvo");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

app.get("/filmes", (req, res) => {
  Filmes.find({})
    .then((filmes) => {
      console.log(filmes);
      res.send(filmes);
    })
    .catch((err) => {
      console.error(err);
    });
});

const porta = 3001;

app.get("/", (req, res) => {
  res.send("praticando");
});

app.listen(porta, () => {
  console.info(`App rodando em http://localhost:${porta}`);
});
