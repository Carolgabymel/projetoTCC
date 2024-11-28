const database = require("../database/database");

module.exports = class AlunoModel {
  static async selectAllAluno() {
    const selectAllAluno = "SELECT * FROM aluno;";
    const [result] = await database.query(selectAllAluno);

    return result;
  }

  static async insertAluno(aluno) {
    const { aluno_name, aluno_email, aluno_serie } = aluno;
    const insertAluno =
      "INSERT INTO aluno(aluno_name, aluno_email, aluno_serie) VALUES (?, ?, ?,);";
    const [result] = await database.query(insertAluno, [
      aluno_name,
      aluno_email,
      aluno_serie,
    ]);

    return result;
  }
};
