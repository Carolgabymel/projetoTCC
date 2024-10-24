class IndexController {
  static async getIndex(req, res) {
    return res.render("index");
  }
}

module.exports = IndexController;
