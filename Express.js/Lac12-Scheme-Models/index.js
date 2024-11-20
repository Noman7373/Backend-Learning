import express from "express";
import homeRoute from "./Routers/web.js";
import dbConection from "./Connect-DB/ConnectDb.js";
import "./models/userSchema.js";
const app = express();

// DB connection
const dataBase_URL = process.env.dataBase_URL || "mongodb://localhost:27017";
dbConection(dataBase_URL);

const PORT = process.env.PORT || 3000;

app.use("/", homeRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
