import express from "express";
import { userHomePage } from "../Controller-js/homeController.js";
import { aboutPageController } from "../Controller-js/aboutController.js";
const router = express.Router();

router.get("/", userHomePage);

router.get("/about", aboutPageController);

export default router;
