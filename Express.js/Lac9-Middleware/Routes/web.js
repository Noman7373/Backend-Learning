import { Router } from "express";
import { homePage } from "../controllers/homeController.js";
import { aboutPage } from "../controllers/aboutController.js";
const router = Router();
// import logmiddleWare from "../middlewares/log-middleware.js";

// Router-level middleware
// Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().
// a middleware function with no mount path. This code is executed for every request to the router
// router.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

router.get("/", homePage);
router.get("/about", aboutPage);
// router.get("/about123", (req, res) => {
//   res.send("About page to check middleware");
// });
export default router;
