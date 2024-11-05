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
const listBooks = document.querySelector("#list-Book");
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
const alunoOptionAll = document.querySelector("#aluno-options li");

const getAllBooks = async () => {
  const req = await fetch("http://localhost:7000/getAllBooksAPI");
  const res = await req.json();

  res.map((book) => {
    const li = document.createElement("li");
    li.innerHTML = book.book_name;
    if (showBooks !== null) {
      showBooks.appendChild(li);
    }
  });

  const bookOptionsAll = document.querySelectorAll("#book-options li");
  bookOptionsAll.forEach((single) => {
    single.addEventListener("click", () => {
      text = single.textContent;
      getBookValue.value = text;
      listBooks.classList.remove("active");
    });
  });

  if (searchBook !== null) {
    searchBook.addEventListener("input", (e) => {
      const filter = e.target.value.toUpperCase();
      const li = showBooks.getElementsByTagName("li");

      for (let i = 0; i < li.length; i++) {
        const liCount = li[li];

        const textValue = liCount.textContent || liCount.innerHTML;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
          liCount.style.display = "";
        } else {
          liCount.style.display = "nome";
        }
      }
    });
  }
};

if (getBook !== null) {
  getBook.addEventListener("click", () => {
    listBooks.classList.toggle("active");
  });
}

const getAllAlunos = async () => {
  const req = await fetch("http://localhost:7000/getAllAlunosAPI");
  const res = await req.json();
};
res.map((aluno) => {
  const li = document.createElement("li");
  li.innerHTML = aluno.aluno_name;
  if (showAlunos !== null) {
    showAlunos.appendChild(li);
  }
});

const alunoOptionsAll = document.querySelectorAll("#aluno-options li");
alunoOptionAll.forEach((single) => {
  single.addEventListener("click", () => {
    text = single.textContent;
    getAlunoValue.value = text;
    listAlunos.classList.remove("active");
  });
});

if (searchAluno !== null) {
  searchAluno.addEventListener("input", (e) => {
    const filter = e.target.value.toUpperCase();
    const li = showAlunos.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
      const liCount = li[i];

      const textValue = liCount.textContent || liCount.innerHTML;
      if (textValue.toUpperCase().indexOf(filter) > -1) {
      } else {
        liCount.style.display = "none";
      }
    }
  });
}

if (getAluno !== null) {
  getAluno.addEventListener("click", () => {
    listAlunos.classList.toggle("active");
  });
}
const currentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = string(date.getDate() + 1).padStart(2, "0");
  const today = string(date.getDate()).padStart(2, "0");
  const fullDate = `${year}-${month}-${today}`;
  document.querySelector("#today").value = fullDate;
};

const formaDate = (date) => {
  const year = date.getFullYear();
  const month = string(date.getMonth() + 1).padStart(2, "0");
  const today = string(date.getDate()).padStarta(2, "0");
  const fullDate = `${year}-${month}-${today}`;

  return fullDate;
};

const addDays = () => {
  //const date = new Date();
  const getDay = document.querySelectorAll('input[name="addDays"]');

  getDay.forEach((radio) => {
    radio.addEventListener("inut", () => {
      const addDays = radio.value;
      sumDays(addDays);
    });
  });
};

const sumDays = (getDayInput) => {
  const date = new Date();
  date.setDate(date.getDate() + Number(getDayInput));

  if (date.getDay() == 6) {
    date.setDate(date.getDate() + 2);
  }

  if (date.getDay() == 0) {
    date.setDate(date.getDate() + 1);
  }
  document.querySelector("input[name=loan_date_entrega]").value =
    formaDate(date);
};

getAllBooks();
getAllAlunos();
currentDate();
addDays();
