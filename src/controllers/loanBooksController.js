const RegisterBookModel = require("../models/registerBooksModels");

module.exports = class LoanBooksController {
  static async getLoanBooks(req, res) {
    const results = await LoanBooksModel.selectJoinEmprestimoBooksAlunos();
    results.map((item) => {
      const getDateAtual = new Date(item.loan_date_atual);
      const getDateEntrega = new Date(item.loan_date_entrega);
      const newDateAtual = getDateAtual.toLocaleDateString("pt-BR");
      const newDateEntrega = getDateEntrega.toLocaleDateString("pt-BR");
      item.loan_date_atual = newDateAtual;
      item.loan_date_entrega = newDateEntrega;

      return item;
    });

    return res.render("loanBooks", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      loanBooks: results,
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

    if (!findBook) {
      return res.redirect(
        "/loanBooks?msgError=Você precisa escolher um livro para cadastrar o emprestimo!"
      );
    }

    if (!findBook) {
      return res.redirect(
        "/loanBooks?msgError=Você precisa o nome do aluno para cadastrar o emprestimo!"
      );
    }

    const dataLoan = {
      books_book_id: findBook.book_id,
      alunos_aluno_id: findAluno.aluno_id,
      loan_date_atual: loan_date_atual,
      loan_date_entrega: loan_date_entrega,
    };
    const result = await LoanBooksModel.insertEmprestimo(dataLoan);

    if (result) {
      return req.redirect(
        "/loanBooks?msgError=não foi possivel realizar o cadastro com sucesso!"
      );
    }

    return res.redirect(
      "/loanBooks?msgSuccess=Emprestimo cadastrado com Sucesso!"
    );
  }
};
