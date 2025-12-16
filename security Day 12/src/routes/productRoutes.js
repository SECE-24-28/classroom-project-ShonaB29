const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

router.get("/", verifyToken, productController.getAllProducts);

// Admin only
router.post(
  "/",
  verifyToken,
  authorizeRoles("ADMIN"),
  productController.createProduct
);

module.exports = router;