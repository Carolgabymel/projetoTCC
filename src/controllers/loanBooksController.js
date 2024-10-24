module.exports = class LoanBooksController {
  static async getLoanBooks(req, res) {
    return res.render("loanBooks", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }
  static async postLoanBook(req, res) {
    return res.redirect(
      "/loanBooks?msgSuccess=Emprestimo cadastrado com Sucesso!"
    );
  }
};
