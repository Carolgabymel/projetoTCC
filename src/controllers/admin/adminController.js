const jwt = require("jsonwebtoken");
const { JsonWebTokenError } = require("jsonwebtoken");
const AdminModel = require("../../models/adminModel");

class AdminController {
  static async getAdmin(req, res) {
    const msgSuccess = req.query.msgSuccess;
    const msgError = req.query.msgError;

    return res.render("admin", {
      msgError,
      msgSuccess,
    });
  }

  static async postAdmin(req, res) {
    const { admin_email, admin_password } = req.body;
    const result = await AdminModel.selectAdminByEmail(admin_email);

    if (!admin_email || !admin_password) {
      return res.redirect("/?msgError=Campos precisam ser preenchidos!");
    }

    if (!result) {
      return res.redirect(
        "/?msgError=Esse email não está cadastrado, entre em contato com Admin do sistema"
      );
    }

    if (admin_password !== result.admin_password) {
      return res.redirect("/?msgError=A senha não são iguais");
    }
    const tokenAdmin = jwt.sign(
      { token: result.admin_id },
      process.env.SESSIONSECRET,
      {
        expiresIn: 60 * 60 * 1000,
      }
    );
    res.cookie("tokenAdmin", tokenAdmin, {
      maxAge: 60 * 60 * 1000,
      httpOmly: true,
    });

    req.session.logged = true;
    req.session.adminUser = result;

    return res.redirect("/home?msgSuccess=Login realizado com sucesso");
  }
}
module.exports = AdminController;
