import { Router } from "express";
import UserController from "../controllers/userControllers.js";

const router = Router();

router.get("/", UserController.homePage);
router.get("/registration", UserController.userRegistration);
router.post("/registration", UserController.userDoc);
router.get("/login", UserController.logInUser);
router.post("/login", UserController.verifyLogin);
router.get("/forgot-password", UserController.forgotPassword);

export default router;
