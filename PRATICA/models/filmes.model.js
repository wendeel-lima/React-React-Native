const mongoose = require("mongoose");

const filmeModel = new mongoose.Schema({
  nome: { type: String, required: true },
  urlImagem: { type: String, required: true },
  sinopse: { type: String, required: true },
  urlTreiller: { type: String, required: true },
  dateCreate: { type: Date, default: Date.now },
});

const Filmes = mongoose.model("filmes", filmeModel);

module.exports = Filmes;
