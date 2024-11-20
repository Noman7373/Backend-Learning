import express from "express";
import homeRoute from "./Routers/webs.js";
import connectDB from "./Connect-DB/connectDb.js";
const app = express();
const PORT = process.env.PORT || 3000;

// const dataBase_URL =
//   process.env.dataBase_URL || "mongodb://localhost:27017/test";

// connect with Authentication
// const dataBase_URL =
//   process.env.dataBase_URL || "mongodb://NomanAhmed:12345678@localhost:27017/test?authSource=students";

// we hide other info and use it other side then import here
const dataBase_URL =
  process.env.dataBase_URL || "mongodb://localhost:27017";

connectDB(dataBase_URL);

app.set("view engine", "ejs");

app.use("", homeRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
