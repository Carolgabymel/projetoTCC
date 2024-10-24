const express = require("express");
const RegisterController = require("../controllers/registerController");
const RegisterUserMiddleware = require("../middlewares/registerUserMiddleware");

const registerRoute = express.Router();

registerRoute.get("/", RegisterController.getRegister);

registerRoute.post(
  "/",
  RegisterUserMiddleware.verifyFields,
  RegisterController.postRegister
);

module.exports = registerRoute;
