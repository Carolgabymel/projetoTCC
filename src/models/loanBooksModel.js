const database = require("../database/database");

module.exports = class LoanBooksModel {
  static async selectAllEmprestimos() {
    const selectAllEmprestimos = "SELECT * FROM loan;";
    const [result] = await database.query(selectAllEmprestimos);

    return result;
  }

  static async selectAllEmprestimosById(loan_id) {
    const selectAllEmprestimosById = "SELECT * FROM loan WHERE loan_id = ?;";
    cons[result] = await database.query(selectAllEmprestimosById, [loan_id]);

    return result;
  }

  static async insertEmprestimos(loan) {
    const {
      books_book_id,
      alunos_aluno_id,
      loan_date_atual,
      loan_date_entrega,
    } = loan;
    const insertEmprestimos = `INSERT INDO lOAN(
            books_book_id,
            alunos_aluno_id,
            loan_date_atual,
            loan_date_entrega
        )
            VALUES (?, ?, ?, ?);`;
    const [result] = await database.query(insertEmprestimos, [
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
        SET books_book_id = ?
            alunos_aluno_id = ?
            loan_date_atual = ?
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

  static async selectAllEmprestimosBooksAlunos() {
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
        carol_gabi_melissa.loan
        JOIN
        carol_gabi_melissa.alunos ON loan.aluno_aluno_id = alunos.aluno_id
        JOIN
        carol_gabi_melissa.books ON loan.books_book_id = books.book_id;`;
    const [result] = await database.query(selectJoin);

    return result;
  }
};
