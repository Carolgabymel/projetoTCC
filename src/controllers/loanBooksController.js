const { format } = require("../database/database");
const AlunoModel = require("../models/alunoModel");
const LoanBooksModel = require("../models/loanBooksModel");
const RegisterBookModel = require("../models/registerBooksModels");

const formatedDate = (date) => {
  const newDate = new Date(date);

  const yearAtual = newDate.getFullYear();
  const monthAtual = String(newDate.getMonth() + 1).padStart(2, "0");
  const dayAtual = String(newDate.getDate()).padStart(2, "0");

  const formatted = `${yearAtual}-${monthAtual}-${dayAtual}`;

  return formatted;
};

module.exports = class LoanBooksController {
  static async getLoanBooks(req, res) {
    const results = await LoanBooksModel.SelectJoinEmprestimoBooksAlunos();

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

    const resultBook = await RegisterBookModel.selectAllBooks();
    const resultAluno = await AlunoModel.selectAllAluno();

    const findBook = resultBook.find((book) => book.book_name === loan_book);

    const findAluno = resultAluno.find(
      (aluno) => aluno.aluno_name === loan_aluno
    );

    if (!findBook) {
      return res.redirect(
        "/loanBooks?msgError Você precisa escolher um livro para cadastrar o emprestimo!"
      );
    }

    if (!findAluno) {
      return res.redirect(
        "/loanBooks?msgError Você precisa  o nome do aluno para cadastrar o emprestimo!"
      );
    }

    const dataLoan = {
      book_book_id: findBook.book_id,
      alunos_aluno_id: findAluno.aluno_id,
      loan_date_atual: loan_date_atual,
      loan_date_entrega: loan_date_entrega,
    };

    const result = await LoanBooksModel.insetEmprestimo(dataLoan);

    if (!result) {
      return res.redirect(
        "/loanBooks?msgError=Não foi possivel realizar o cadastro do Emprestimo!"
      );
    }

    return res.redirect(
      "/loanBooks?msgSuccess=Emprestimo cadastro com sucesso!"
    );
  }
  static async editLoan(req, res) {
    const getID = Number(req.params.id);

    const results = await LoanBooksModel.SelectJoinEmprestimoBooksAlunos();

    results.map((item) => {
      item.loan_aluno_date_atual = formatedDate(item.loan_aluno_date_atual);
      item.loan_date_entrega = formatedDate(item.loan_date_entrega);

      return item;
    });

    const findLoan = results.find((item) => item.loan_id === getId);

    return res.render("editLoan", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
      loanBook: findLoan,
    });
  }

  static async updateLoan(req, res) {
    const getId = req.params.id;
    const { loan_book, loan_aluno, loan_date_atual, loan_date_entrega } =
      req.body;

    const resultBook = await RegisterBookModel.selectALLBooks();
    const resultAluno = await AlunoModel.selectAllAluno();

    const findBook = resultBook.find((book) => book.book_name === loan_book);

    const findAluno = resultAluno.find(
      (aluno) => aluno.aluno_name === loan_aluno
    );

    if (!findBook) {
      return res.redirect(
        `/loanBooks/editLoan/${getId}?msgError= Você precisa escolher um livro para atualizar o cadastro do emprestimo!`
      );
    }
    if (!findAluno) {
      return res.redirect(
        `/loanBooks/ediLoan/${getId}?msgerror=Você precisa o nome do aluno para atualizar o cadastro do emprestimo!`
      );
    }

    const dataLoan = {
      books_book_id: findBook.book_id,
      alunos_aluno_id: findAluno.aluno_id,
      loan_date_atual: loan_date_atual,
      loan_date_entrega: loan_date_entrega,
    };

    const result = await LoanBooksModel.updateEmprestimo(getId, dataLoan);

    if (!result) {
      return res.redirect(
        `/loanBooks/editLoan/${getId}?msgError= não foi possivel atualizar o cadastro do emprestimo!`
      );
    }

    return res.redirect(
      `/loanBooks/editLoan/${getId}?msgSuccess= cadastro dp emprestimo atualizado com sucesso!`
    );
  }

  static async deleteLoan(req, res) {
    const getId = req.params.id;

    const result = await LoanBooksModel.deleteEmprestimo(getId);

    if (!result) {
      return res.redirect(
        `/loanBooks?msgError=não foi possivel deletar o cadastro do emprestimo!`
      );
    }

    return res.redirect(
      `/loanBooks?msgSuccess=cadastro do emprestimo deletado com sucesso!`
    );
  }
};
