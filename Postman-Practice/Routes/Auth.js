import express from "express";
import { signUp } from "../Controller-js/userAuth.js";
const router = express.Router();

router.post("/register", signUp);

export default router;
