const database = require("../database/database");

module.exports = class AlunoModel {
  static async selectAllAluno() {
    const selectALLAluno = "SELECT * from alunos;";
    const [result] = await database.query(selectAllAluno);

    return result;
  }

  static async selectAlunoById(aluno_id) {
    const selectAlunoById = "SELECT * FROM alunos WHERE aluno_id = ?;";
    const [result] = await database.query(selectAlunoById, [aluno_id]);

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

  static async updateAluno(aluno_id, aluno) {
    const { aluno_name, aluno_email, aluno_serier } = aluno;
    const updateAluno =
      "UPDATE alunos SET aluno_name = ?, aluno_email = ?, aluno_serie = ? WHERE aluno_id = ?;";
    const [result] = await database.query(updateAluno, [
      aluno_name,
      aluno_email,
      aluno_serie,
      aluno_id,
    ]);

    return result;
  }

  static async deleteAluno(aluno_id) {
    const deleteAluno = `DELETE FROM alunos WHERE aluno_id = ?;`;
    const [result] = await database.query(deleteAluno, [aluno_id]);

    return result;
  }
};
