import { join } from "path";

const homeController = (req, res) => {
  // res.send("Home Page")
  // to send HTML File
  res.sendFile(join(process.cwd(), "views", "index.html"));
  console.log(join(process.cwd(), "views", "index.html"));
};

export { homeController };
