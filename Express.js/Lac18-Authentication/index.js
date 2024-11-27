import express from "express";
import { join } from "path";
import authRoute from "./routes/authRoutes.js";
import dataBaseConnection from "./db/dbConnect.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.static(join(process.cwd(), "public")));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/";

dataBaseConnection(DB_URL);

app.use("/", authRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
