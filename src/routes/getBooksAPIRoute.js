const express = require("express");
const RegisterBookController = require("../controllers/registerBooksController");

const getAllBooksAPIRoute = express.Router();

getAllBooksAPIRoute.get("/", RegisterBookController.getAllBooksAPI);

module.exports = getAllBooksAPIRoute;
