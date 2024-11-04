import express from "express";
import { user, userSelectProduct } from "../controller-js/userController.js";
const router = express.Router();

router.get("", user);

router.get("/product/:category/:id" , userSelectProduct);

export default router;
