const { products } = require("../models/productModel");

// READ ALL
exports.getAllProducts = (req, res) => {
  res.json(products);
};