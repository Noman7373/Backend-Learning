//   ==================================  Route Parameter  =======================================
// In Express.js, route parameters are a way to capture values from the URL and make them available in your route handler. This allows you to create dynamic routes based on the input you receive. Route parameters are specified by a colon (:) followed by a name in the route path.

import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/student/delete:id", (req, res) => {
  console.log(req.params);

  res.send(`All Students deleted ${req.params.id}`);
});
app.get("/product/:category/:id", (req, res) => {
  console.log(req.params);
  res.send(
    `All products Category :${req.params.category} and ID : ${req.params.id}`
  );
  // Destructure
  const { category, id } = res.params;
  res.send(`All products Category :${category} and ID : ${id}`);
});

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
