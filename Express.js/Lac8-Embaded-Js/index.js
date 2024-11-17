// ============================= EJS Template Engine ====================================
// EJS (Embedded Javascript) is a simple language that let us generate HTML markup with plain Javascipt.
// Advantage
// * Fast complilation and rendering
// * Simple Tamplet tag <% %>

import express from "express";
import userHome from "./Router/web.js";
const app = express();

const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");

app.use("", userHome);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost${PORT}`);
});
