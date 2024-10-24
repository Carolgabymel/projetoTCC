const express = require("express");
const RegisterBookController = require("../controllers/registerBooksController");
const multer = require("multer");
const AuthAdminMiddleware = require("../middlewares/authAdminMiddleware");
const storage = require("../middlewares/uploadBookImgMiddleware");

const registerBooksRoute = express.Router();

const upload = multer({ storage: storage });

registerBooksRoute.get(
  "/",
  AuthAdminMiddleware.adminAuthorization,
  RegisterBookController.getRegisterBook
);

registerBooksRoute.post(
  "/",
  upload.single("book_image"),
  RegisterBookController.postBook
);

module.exports = registerBooksRoute;
