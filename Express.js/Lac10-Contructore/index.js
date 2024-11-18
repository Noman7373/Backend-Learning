// =========================  Make Website Under Constructore ===================================
import express from "express";
import { join } from "path";
import homeRoute from "./Routes/web.js";
import underConstruction from "./middleware/uc-middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Applicaion Level MiddleWare
// app.use(underConstruction);
// specific path and it will apply all about route where in start /about path
app.use("/about", underConstruction);

// EJS setup
app.set("view engine", "ejs");
// Static file setup
app.use(express.static(join(process.cwd(), "public")));

app.use("", homeRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
