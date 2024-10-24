const express = require("express");
const LoanBooksController = require("../controllers/loanBooksController");

const loanBooksRoute = express.Router();

loanBooksRoute.get("/", LoanBooksController.getLoanBooks);

loanBooksRoute.post("/", LoanBooksController.postLoanBook);

module.exports = loanBooksRoute;
