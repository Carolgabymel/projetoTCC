const AlunoModel = require("../models/alunoModel");

module.exports = class AlunoController {
  static async getAlunos(req, res) {
    return res.render("alunos", {
      msgError: req.query.msgError,
      msgSuccess: req.query.msgSuccess,
    });
  }

  static async postAluno(req, res) {
    const { aluno_name, aluno_email, aluno_serie } = req.boby;

    if (!aluno_name || !aluno_email || !aluno_serie) {
      return res.redirect(
        "/alunos?msgSuccess=Aluno ou Aluna cadastrado com sucesso!"
      );
    }

    const dataAluno = {
      aluno_name,
      aluno_email,
      aluno_serie,
    };

    const result = await AlunoModel.insertAluno(dataAluno);

    if (!result) {
      return res.redirect(
        "/aluno?msgError=não foi possivel cadastrar o aluno!"
      );
    }

    return res.redirect("/aluno?msgSucces=Emprestimo cadastrado com sucesso!");
  }

  static async getAllAlunosAPI(req, res) {
    const result = await AlunoModel.selectAllAluno();

    return res.json(result);
  }
};
