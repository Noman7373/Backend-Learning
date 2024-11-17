// ================================  Tamplete Engine ============================

// A Tamplet-Engine allow us to use static Tampelet files  in our application at runtime.The Template Engine replace the variables in a Template File which actual values, and transform the template into an HTML File send to Client....

// install Template-Engine ejs
// Types OF Template-Engine
// * Ejs    >   index.ejs
// * Pug
// * Mustache
// * Nunjucks
// * Dust

// res.render()
// It render a view and sends the rendered HTML string to the client.
// res.render("views, [locals], [callback]")

import express from "express";
import { join } from "path";
import homeRouter from "./Routes/user.js";
const app = express();
const PORT = process.env.PORT || 8000;

// tell where the the ejs files are present
// if the files are present inside "Views" folder then we dnt need this step
// app.set("Views", "./Views");

// to tell we are using ejs
app.set("view engine", "ejs");
// to add static files
app.use(express.static(join(process.cwd(), "public")));
app.use("", homeRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost${PORT}`);
});
