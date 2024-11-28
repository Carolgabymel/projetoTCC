const RegisterBookModel = require("../models/registerBooksModels");

module.exports = class CategoriesBooksController {
  static async getRomance(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Romance"
    );

    return res.render("romance", { romance: findCategoria });
  }

  static async getTerror(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Terror"
    );
    return res.render("terror", { terror: findCategoria });
  }

  static async getHQs(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "HQs"
    );
    return res.render("hqs", { hqs: findCategoria });
  }

  static async getGastronomia(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Gastronomia"
    );
    return res.render("gastronomia", { gastronomia: findCategoria });
  }

  static async getSuspence(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Suspence"
    );
    return res.render("suspence", { supence: findCategoria });
  }

  static async getComedia(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Comedia"
    );
    return res.render("comedia", { comedia: findCategoria });
  }

  static async getCriminais(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Criminais"
    );
    return res.render("criminais", { criminais: findCategoria });
  }

  static async getFabulas(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Fabulas"
    );
    return res.render("fabulas", { fabulas: findCategoria });
  }

  static async getGibis(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Gibis"
    );
    return res.render("gibis", { gibis: findCategoria });
  }

  static async getLiteraturabrasileira(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Literaturabrasileira"
    );
    return res.render("literaturabrasileira", {
      literaturabrasileira: findCategoria,
    });
  }

  static async getInfantojuvenil(req, res) {
    const getALLBooks = await RegisterBookModel.selectALLBooks();
    const findCategoria = getALLBooks.filter(
      (categoria) => categoria.book_categoria === "Infantojuvenil"
    );
    return res.render("infantojuvenil", { infantojuvenil: findCategoria });
  }
};
