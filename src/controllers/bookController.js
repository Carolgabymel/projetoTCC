const RegisterBookModel = require("../models/registerBooksModels");

module.exports = class BookController {
  static async getBook(req, res) {
    const getSlug = req.params.slug;

    const results = await RegisterBookModel.selectAllBooks();

    const book = results.filter((item) => item.book_slug === getSlug);

    return res.render("book", {
      book,
      msgSuccess: req.query.msgSuccess,
      msgError: req.query.msgError,
    });
  }
};
