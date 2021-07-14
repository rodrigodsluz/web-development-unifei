const express = require("express");
const routes = express.Router();

const Product = require("./src/Controllers/ProductController");
const Cart = require("./src/Controllers/NotaFiscalController");

routes.post("/addProduct", Cart.addProduct);

routes.get("/list-products", Product.getAllProducts);

routes.get("/nota-fiscal", Cart.showNotaFiscal);

module.exports = routes;
