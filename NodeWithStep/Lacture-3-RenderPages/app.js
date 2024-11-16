import express from "express";
import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;

const app = express();

const PORT = process.env.PORT || 4000;

// for Es6
const publicPath = path.join(__dirname, "public");

console.log(publicPath);

app.use(express.static(publicPath));

app.listen(PORT, () => {
  console.log(`Server listining at http://localhost${PORT}`);
});

// app.get("", (req, res) => {
//   res.send(`<h1>Home page</h1> <a href = "/about"> Go To About Page </a>`);
// });

// app.get("/about", (req, res) => {
//   res.send(`<h1>About Page</h1> <a href = "/contact"> Go To Contact Page </a>`);
// });
// app.get("/contact", (req, res) => {
//   res.send(`<h1>Contact Page</h1> <a href = "/"> Go To Home Page </a>`);
// });

// // Send JSON Data

// app.get("/userdetail", (req, res) => {
//   const userInfo = {
//     name: "Noman",
//     age: 123,
//   };

//   res.send(JSON.stringify(userInfo));
// });
