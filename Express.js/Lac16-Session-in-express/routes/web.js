import { Router } from "express";
import StudentController from "../Controller/studentController.js";

const router = Router();

router.get("/getsessioninfo", StudentController.getSessionInfo);
router.get("/deleteSession", StudentController.deleteSession);
router.get("/regenerateSession", StudentController.regenerateSession);
// Session varible
router.get("/exampleSession", StudentController.session_example);
// Get session Dynamic Data
router.get("/exampleSession2", StudentController.getSessionDynamicData);

export default router;
