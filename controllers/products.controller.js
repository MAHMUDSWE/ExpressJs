const products = require("../models/products.model");
const path = require("path");

exports.getProducts = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../views/products.html"))
};

exports.postProducts = (req, res)=> {
  const name = req.body.name;
  const model = req.body.model;
  
  const product = {
      name,
      model,
  }

  products.push(product);
  res.status(200).json({
    success: true,
    products,
  });
};
