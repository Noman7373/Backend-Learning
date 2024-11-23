import express from "express";
import { userHome } from "../controllers/userHome.js";

const router = express.Router();

router.get("/", userHome);

export default router;
