const database = require("../database/database");

module.exports = class LoanBooksModel {
  static async selectAllEmprestimos() {
    const selectAllEmprestimo = "SELECT * FROM loan;";
    const [result] = await database.query(selectAllEmprestimo);

    return result;
  }

  static async selectEmprestimoById(loan_id) {
    const selectEmprestimoById = "SELECT * FROM loan WHERE loan_id = ?;";
    const [result] = await database.query(selectEmprestimoById, [loan_id]);

    return result;
  }

  static async insertEmprestimo(loan) {
    const {
      books_book_id,
      alunos_aluno_id,
      loan_date_atual,
      loan_date_entrega,
    } = loan;
    const insertEmprestimo = `INSERT INTO loan(
        books_book_id,
        alunos_aluno_id,
        loan_date_atual,
        loan_date_entrega
      )
      VALUES (?, ?, ?, ?);`;
    const [result] = await database.query(insertEmprestimo, [
      books_book_id,
      alunos_aluno_id,
      loan_date_atual,
      loan_date_entrega,
    ]);

    return result;
  }

  static async updateEmprestimo(loan_id, loan) {
    const {
      books_book_id,
      alunos_aluno_id,
      loan_date_atual,
      loan_date_entrega,
    } = loan;
    const updateEmprestimo = `UPDATE loan 
      SET books_book_id = ?,
          alunos_aluno_id = ?,
          loan_date_atual = ?,
          loan_date_entrega = ?
      WHERE
        loan_id = ?;`;
    const [result] = await database.query(updateEmprestimo, [
      books_book_id,
      alunos_aluno_id,
      loan_date_atual,
      loan_date_entrega,
      loan_id,
    ]);

    return result;
  }

  static async deleteEmprestimo(loan_id) {
    const deleteEmprestimo = `DELETE FROM loan WHERE loan_id = ?;`;
    const [result] = await database.query(deleteEmprestimo, [loan_id]);

    return result;
  }

  static async SelectJoinEmprestimoBooksAlunos() {
    const selectJoin = `SELECT 
        alunos.aluno_id,
        alunos.aluno_name,
        alunos.aluno_email,
        alunos.aluno_serie,
        books.book_id,
        books.book_name,
        books.book_autor,
        books.book_categoria,
        loan.loan_id,
        loan.loan_date_atual,
        loan.loan_date_entrega
      FROM 
        loan
      JOIN 
        alunos ON loan.alunos_aluno_id = alunos.aluno_id
      JOIN 
        books ON loan.books_book_id = books.book_id;`;
    const [result] = await database.query(selectJoin);

    return result;
  }
};
