import express from "express";
import ProductController from "../controllers/ProductController.js";
import ProductMiddleWare from "../middlewares/ProductMiddleWare.js";

const router = express();

router.get("/product", ProductController.getProduct);
router.post("/product", ProductController.addProduct);
router.get(
  "/product/:id",
  ProductMiddleWare.checkHexIdValidation,
  ProductController.getProductItem
);
router.get("/product-search", ProductController.searchProduct);

export default router;
