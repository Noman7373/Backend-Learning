import express from "express";
import dbConnect from "./db/dbConnect.js";
// import { createDocuments } from "./models/userScehma.js";

// get data fuction import
import { getAllData, getSingleUserData } from "./models/userScehma.js";
import homeController from "./routers/web.js";
const app = express();

const PORT = process.env.PORT || 8000;

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/";

dbConnect(DATABASE_URL);

// createDocuments();

getAllData();
getSingleUserData();

app.use("", homeController);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
