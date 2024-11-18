import express from "express";
import { homePage } from "../Controller-js/homeController.js";
import { aboutPage } from "../Controller-js/aboutController.js";
import { contactPage } from "../Controller-js/contactController.js";
const router = express.Router();

router.get("/", homePage);
router.get("/about", aboutPage);
router.get("/contact" , contactPage)

export default router;
