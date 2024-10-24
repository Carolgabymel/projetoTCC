const RegisterBookModel = require("../models/registerBooksModels");

class HomeController {
  static async getHome(req, res) {
    const results = await RegisterBookModel.selectALLBooks();
    return res.render("index", { results });
  }
  static async postHome(req, res) {
    return res.redirect("/index");
  }
}

module.exports = HomeController;
