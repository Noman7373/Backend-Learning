import express from "express";
import user from "./routes/user.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", user);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost${PORT}`);
});
