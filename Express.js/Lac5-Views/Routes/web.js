import express from "express";
import { homeController } from "../Controllers-js/homeController.js";
import { aboutController } from "../Controllers-js/aboutController.js";
const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);

export default router;
