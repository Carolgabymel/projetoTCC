require("dotenv").config();
const express = require("express");
const homeRoute = require("./src/routes/homeRoute");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const database = require("./src/database/database");
const dashboardRoute = require("./src/routes/dashboardRoute");
const adminRoute = require("./src/routes/adminRoute");
const { register } = require("module");
const registerRoute = require("./src/routes/registerRoutes");
const logoutAdminRoute = require("./src/routes/logoutAdminRoute");
const registerBooksRoute = require("./src/routes/registerBookRoute");
const alunosRoute = require("./src/routes/alunosRoute");
const loanBooksRoute = require("./src/routes/loanBooksRoute");
const getAllBooksAPIRoute = require("./src/routes/getBooksAPIRoute");
const alunosRouteAPI = require("./src/routes/alunosRouteAPI");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static(path.join(__dirname, "./public/uploads")));

app.use(cookieParser());
app.use(
  session({
    name: "session",
    secret: process.env.SESSIONSECRET,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    saveUninitialized: true,
  })
);

app.use("/", adminRoute);
app.use("/home", homeRoute);
app.use("/dashboard", dashboardRoute);
app.use("/register", registerRoute);
app.use("/registerBooks", registerBooksRoute);
app.use("/alunos", alunosRoute);
app.use("/loanBooks", loanBooksRoute);
app.use("/logoutAdmin", logoutAdminRoute);
app.use("/getAllBooksAPI", getAllBooksAPIRoute);
app.use("/getAllAlunosAPI", alunosRouteAPI);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});

// database.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("conectado no banco de dados!");
//     app.listen(port, () => {
//       console.log(`http://localhost:${port}`);
//     });
//   }
// });
