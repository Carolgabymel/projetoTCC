class RegisterController {
  static async getRegister(req, res) {
    return res.render("register");
  }

  static async postRegister(req, res) {
    console.log("controller");

    return res.redirect("/index");
  }
}

module.exports = RegisterController;
