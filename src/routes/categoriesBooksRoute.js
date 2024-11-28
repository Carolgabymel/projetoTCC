const express = require("express");
const CategoriesBooksController = require("../controllers/categoriesBooksController");

const categoriesRoute = express.Router();

categoriesRoute.get("/romance", CategoriesBooksController.getRomance);
categoriesRoute.get("/terror", CategoriesBooksController.getTerror);
categoriesRoute.get("/suspense", CategoriesBooksController.getSuspence);
categoriesRoute.get("/hqs", CategoriesBooksController.getHQs);
categoriesRoute.get("/comedia", CategoriesBooksController.getComedia);
categoriesRoute.get("/criminais", CategoriesBooksController.getCriminais);
categoriesRoute.get("/fabulas", CategoriesBooksController.getFabulas);
categoriesRoute.get("/gibis", CategoriesBooksController.getGibis);
categoriesRoute.get("/gastronomia", CategoriesBooksController.getGastronomia);
categoriesRoute.get(
  "/literatura brasileira",
  CategoriesBooksController.getLiteraturabrasileira
);
categoriesRoute.get(
  "/infantojuvenil",
  CategoriesBooksController.getInfantojuvenil
);

module.exports = categoriesRoute;
