const express = require("express");
const AlunoController = require("../controllers/alunosController");

const alunosRoute = express.Router();

alunosRoute.get("/", AlunoController.getAlunos);

alunosRoute.post("/", AlunoController.postAluno);

module.exports = alunosRoute;
