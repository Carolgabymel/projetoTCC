const inputImage = document.querySelector("input[name='book_image']");
const imgBook = document.querySelector("#img-book");

if (inputImage !== null) {
  inputImage.addEventListener("input", (e) => {
    const input = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      imgBook.src = e.target.result;
    });

    reader.readAsDataURL(input);
  });
}
// criando codigo para gerar livros da API

const showBooks = document.querySelector("#book-options");
const selectBook = document.querySelector("#select-book");
const listBook = document.querySelector("#list-Book");
const getBook = document.querySelector("#get-Book");
const getBookValue = document.querySelector("input[name='loan_book']");
const searchBook = document.querySelector("input[name='search_book']");
const bookOptionsAll = document.querySelector("#book-option li");
const showAlunos = document.querySelector("#aluno-options");
const selectAluno = document.querySelector("#select-aluno");
const listAlunos = document.querySelector("#list-aluno");
const getAluno = document.querySelector("#get-aluno");
const getAlunoValue = document.querySelector("input[name='loan_aluno']");
const searchAluno = document.querySelector("input[name='search_aluno']");
const alunoOptionAll = document.querySelector("#aluno-options");
