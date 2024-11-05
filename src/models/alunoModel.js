const database = require("../database/database");

module.exports = class AlunoModel {
  static async selectAllAluno() {
    const selectALLAluno = "SELECT * from alunos;";
    const [result] = await database.query(selectAllAluno);

    return result;
  }

  static async insertAluno(aluno) {
    const { aluno_name, aluno_email, aluno_serie } = aluno;
    const insertAluno =
      "INSERT INTO alunos(aluno_name, aluno_email, aluno_serie) (VALUES ?, ?, ?);";
    const [result] = await database.query(insertAluno, [
      aluno_name,
      aluno_email,
      aluno_serie,
    ]);

    return result;
  }
};
