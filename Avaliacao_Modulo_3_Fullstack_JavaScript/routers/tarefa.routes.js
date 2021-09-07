const express = require("express");
const Tarefa = require("../models/tarefa.model");
const router = express.Router();

router.get("/", (req, res) => {
  Tarefa.find({})
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/byId/:id", (req, res) => {
  Tarefa.findById({ _id: req.params.id })
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/byName/:titulo", (req, res) => {
  Tarefa.find({ titulo: req.params.titulo })
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/add", (req, res) => {
  Tarefa.create(req.body)
    .then(() => {
      res.status(200).send("Tarefa adicionada com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo errado com a tarefa, tente novamente");
      console.error(err);
    });
});

router.put("/update/id", (req, res) => {
  Tarefa.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("Tarefa atualizada com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo errado com a tarefa, tente novamente");
      console.error(err);
    });
});

router.delete("/delete", (req, res) => {
  Tarefa.updateOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Tarefa atualizada com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo errado com a tarefa, tente novamente");
      console.error(err);
    });
});

module.exports = router;
