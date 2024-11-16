import express from "express";
import productDetail from "../Contoller-js/productController.js";
const router = express.Router();

router.get("/:category/:id", productDetail);

export default router;
