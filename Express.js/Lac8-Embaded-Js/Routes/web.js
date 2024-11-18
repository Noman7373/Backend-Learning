import { Router } from "express";
import { homePage } from "../Controller/homeController.js";
import { aboutPage } from "../Controller/aboutController.js";
const router = Router();

router.get("/", homePage);
router.get("/about", aboutPage);

export default router;
