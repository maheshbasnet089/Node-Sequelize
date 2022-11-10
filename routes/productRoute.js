const productController = require("../controller/productController");
const router = require("express").Router();
router.get("/", productController.getProduct);

router.post("/addproduct", productController.addProduct);
router.put("/:id", productController.updateProduct);

router.get("/:id", productController.getOneProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
