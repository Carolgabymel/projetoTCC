const express = require("express");
const AlunosController = require("../controllers/alunosController");

const alunosRouteAPI = express.Router();

alunosRouteAPI.get("/", AlunosController.getAllAlunosAPI);

module.exports = alunosRouteAPI;
