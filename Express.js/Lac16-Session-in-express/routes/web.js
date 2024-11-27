import { Router } from "express";
import StudentController from "../Controller/studentController.js";

const router = Router();

router.get("/getsessioninfo", StudentController.getSessionInfo);

export default router;
