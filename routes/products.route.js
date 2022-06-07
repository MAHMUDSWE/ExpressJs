const express = require("express");
const { getProducts, postProducts } = require("../controllers/products.controller");

const router = express.Router();

router.get("/productsEntry", getProducts);

router.post("/productsEntry", postProducts);


module.exports = router;
