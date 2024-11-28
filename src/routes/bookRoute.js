const express = require("express");
const BookController = require("../controllers/bookController");

const bookRoute = express.Router();
bookRoute.get("/:slug", BookController.getBook);

module.exports = bookRoute;
