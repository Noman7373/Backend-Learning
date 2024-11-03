// ==============================   Router in Express.Js  ======================================
// In Express.js, a router is a way to manage and organize your application's routes. It allows you to create modular route handlers and makes your code cleaner and more maintainable.

import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teacher.js";

const app = express();

const PORT = process.env.PORT || 8000;

//  ==============================  Load Router Modules   ======================
/// Student will apend the student route
app.use("/student", student);
app.use("/teacher", teacher);

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
