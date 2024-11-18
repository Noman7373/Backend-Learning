import express from "express";
import signUpRoute from "./Routes/Auth.js";
const app = express();

const PORT = process.env.PORT || 3000;
// Middleware for JSON data
// This middleware is responsible for parsing JSON data in the request body.
app.use(express.json());

app.use("/api/auth", signUpRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
