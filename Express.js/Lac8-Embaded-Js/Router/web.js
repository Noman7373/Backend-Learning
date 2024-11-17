import express from "express";
import { userPage } from "../Controllers/user.js";
import { aboutPage } from "../Controllers/about.js";
const router = express.Router();

router.get("/", userPage);
router.get("/about", aboutPage);

export default router;
