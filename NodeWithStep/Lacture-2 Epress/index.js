import express from "express";
import productRoute from "../Lacture-2 Epress/Routes/Product.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/product", productRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost${PORT}`);
});
