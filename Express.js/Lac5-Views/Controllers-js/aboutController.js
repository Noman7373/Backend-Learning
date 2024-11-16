import { join } from "path";

const aboutController = (req, res) => {
  // res.send("About Page");

  res.sendFile(join(process.cwd(), "views", "about.html"));
};

export { aboutController };
