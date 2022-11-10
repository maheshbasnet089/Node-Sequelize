const db = require("../model/index");
const Product = db.products;
const Review = db.reviews;

// add Product
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };
  const product = await Product.create(info);
  res.status(200).json({
    product,
    message: "added succesfully",
  });
};

//getProduct
const getProduct = async (req, res) => {
  let products = await Product.findAll({});
  console.log(products);
  let product = products.products;
  console.log(product);
  res.status(200).json({
    products,
  });
};

///getOneProduct
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).json({
    product,
  });
};

//updateProduct
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).json({
    product,
  });
};

//delete product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).json({
    message: "Deleted sucessfully ",
  });
};

module.exports = {
  addProduct,
  getProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
