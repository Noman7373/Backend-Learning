import { Router } from "express";
import { homeController } from "../Controller-js/home.js";
const router = Router();

router.get("/", homeController);

export default router;
