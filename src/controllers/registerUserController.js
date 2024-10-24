const RegisterUserModel = require("../models/registerUserModels");

class RegisterUserController {
  getRegister(req, res) {
    return res.render("register", {
      msg: "",
    });
  }

  async Store(req, res) {
    const { ...data_user } = req.body;

    const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regex_senha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$#@%*&!?])/;

    const regex_maiuscula = /^(?=.*[A-Z])/;
    const regex_minuscula = /^(?=.*[a-z])/;
    const regex_numero = /^(?=.*[0-9])/;
    const regex_caracter_especal = /^(?=.*[$#@%*&!?])/;

    if (
      !data_user.user_name ||
      !data_user.user_email ||
      !data_user.user_password ||
      !data_user.userConfirmPassword
    ) {
      req.message = { msgFieldsEmpty: "os campos não podem ser vazios!" };
      return res.render("register", {
        msg: req.message,
      });
    }

    if (data_user.user_name.length < 3) {
      req.message = { msgNameError: "Nome precisa ter no minimo 3 caracters!" };
      return res.render("register", {
        msg: req.message,
      });
    }

    if (!regex_email.test(data_user.user_email)) {
      req.message = { msgEmailError: "Digite um email valido" };
      return res.render("register", {
        msg: req.message,
      });
    }
    if (data_user.user_password !== data_user.userConfirmPassword) {
      req.message = { msgPassError: "senhas não são iguais" };
      return res.render("register", {
        msg: req.message,
      });
    }

    const recebeEmailFromModel = await RegisterUserModel.getUserByEmail(
      data_user.user_email
    );
    console.log("Estamos na Controller");
    console.log(recebeEmailFromModel);

    return res.send("user register");
  }
}

module.exports = RegisterUserController;
