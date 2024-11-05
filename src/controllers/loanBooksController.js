const RegisterBookModel = require("../models/registerBooksModels");

module.exports = class LoanBooksController {
  static async getLoanBooks(req, res) {
    return res.render("loanBooks", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }
  static async postLoanBook(req, res) {
    const { loan_book, loan_aluno, loan_date_atual, loan_date_entrega } =
      req.body;

    const resultBook = await RegisterBookModel.selectALLBooks();
    const resultAluno = await AlunoModel.selectALLAluno();

    const findBook = resultBook.find((book) => book.book_name === loan_book);
    const resultAluno = resultAluno.find(
      (aluno) => aluno.aluno_name === loan_aluno
    );
    const dataLoan = {
      books_book_id: findBook.book_id,
      alunos_aluno_id: findAluno.aluno_id,
      loan_date_atual: loan_date_atual,
      loan_date_entrega: loan_date_entrega,
    };
    console.log(dataLoan);

    return res.redirect(
      "/loanBooks?msgSuccess=Emprestimo cadastrado com Sucesso!"
    );
  }
};
