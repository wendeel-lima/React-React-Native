const express = require("express");
const Tarefa = require("../models/tarefa.model");
const router = express.Router();

router.get("/", async (req, res) => {
  await Tarefa.find({})
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/byId/:id", async (req, res) => {
  await Tarefa.findById({ _id: req.params.id })
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/byName/:titulo", async (req, res) => {
  await Tarefa.find({ titulo: req.params.titulo })
    .then((tarefa) => {
      res.send(tarefa);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/add", async (req, res) => {
  await Tarefa.create(req.body)
    .then(() => {
      res.status(200).send("Tarefa adicionada com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo errado com a tarefa, tente novamente");
      console.error(err);
    });
});

router.put("/update/id", async (req, res) => {
  await Tarefa.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).send("Tarefa atualizada com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo errado com a tarefa, tente novamente");
      console.error(err);
    });
});

router.delete("/delete", async (req, res) => {
  await Tarefa.updateOne({ _id: req.params.id })
    .then(() => {
      res.status(200).send("Tarefa deletada com sucesso");
    })
    .catch((err) => {
      res.status(400).send("Algo errado com a tarefa, tente novamente");
      console.error(err);
    });
});

module.exports = router;
