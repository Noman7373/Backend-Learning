import { Router } from "express";
import UserController from "../controllers/userControllers.js";

const router = Router();

router.get("/", UserController.homePage);
router.get("/registration", UserController.userRegistration);
router.get("/login", UserController.logInUser);
router.get("/forgot-password", UserController.forgotPassword);

export default router;
