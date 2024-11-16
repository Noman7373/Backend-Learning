import express from "express";
import home from "./Routes/web.js";
const app = express();

const PORT = process.env.PORT || 3000;

app.use("", home);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
