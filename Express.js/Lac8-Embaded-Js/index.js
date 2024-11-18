import express from "express";
import { join } from "path";
import homeRoute from "./Routes/web.js";
const app = express();

const PORT = process.env.PORT || 3000;
// EJS setup
app.set("view engine", "ejs");

// Static file Setup
app.use(express.static(join(process.cwd(), "public")));

app.use("", homeRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
