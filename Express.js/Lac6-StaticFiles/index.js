// =======================================   STATIC FILES   ================================

// CSS Files , JS , images , Audio , Video and etc are considered as a Static Files in Express.js
// To serve static files such as images , css ,js , video and audio we use express built in middleware function in express.js
import express from "express";
import { join } from "path";
import homePageRoute from "./Routes/web.js";
const app = express();

// Static file Code mention the folder where the all files are..... import {join} from path
// to make more better we have to fix the path
// app.use(express.static(join(process.cwd(), "public")));

// with virtual Path
// app.use("/static",express.static(join(process.cwd(), "public")));

// to apply only specific files
// app.use("/css",express.static(join(process.cwd(), "public/css")));

// to apply dot files
const options = {
  // dot file ignore deos not exits
  dotfiles: "ignore",
  etag: false,
  extentions: ["htm", "html"],
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeader: function (req, path, stat) {
    res.set(`x-timestamp`, Date.now());
  },
};
app.use(express.static(join(process.cwd(), "public"), options));

app.use("", homePageRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server listning at http://localhost${PORT}`);
});
