import express from "express";
import productRoute from "../Lacture-2 Epress/Routes/Product.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/product", productRoute);

app.get("", (req, res) => {
  console.log("Data sent by browser", req.query); // req-body

  const Data = req.query;
  res.send(`Welcome to our about pages ${JSON.stringify(Data)}`); //http://localhost:3000/?name=Noman
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
