// =======================  Middleware  =========================
// Middleware functions are functions that have access to the request object (req), the response (res) and the next function in the applications request-response cycel.

import express from "express";
import homeRoute from "./Routes/web.js";
const app = express();

const PORT = process.env.PORT || 3000;

// Aplication level MiddleWare  it will run all the Routes
// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

// Route/Path Level Middleware it will run only the routes what we add
// And it will run anyroute after /about or where hte about will come first
// app.use("/about", logmiddleWare);

app.use("", homeRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
