const express = require("express");
const HomeController = require("../controllers/homeController");

const homeRoute = express.Router();

homeRoute.get("/", HomeController.getHome);

homeRoute.post("/");

module.exports = homeRoute;
