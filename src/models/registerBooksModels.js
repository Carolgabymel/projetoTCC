const database = require("../database/database");

module.exports = class RegisterBookModel {
  static async selectALLBooks() {
    const selectALLBooks = "SELECT * FROM books;";
    const [result] = await database.query(selectALLBooks);
    return result;
  }

  static async insertBook(book) {
    const { book_image, book_name, book_autor, book_categoria, book_desc } =
      book;
    const insertBook =
      "INSERT INTO books (book_image, book_name, book_autor, book_categoria, book_desc) VALUES (?, ?, ?, ?, ?);";
    const [result] = await database.query(insertBook, [
      book_image,
      book_name,
      book_autor,
      book_categoria,
      book_desc,
    ]);
    return result;
  }
};
