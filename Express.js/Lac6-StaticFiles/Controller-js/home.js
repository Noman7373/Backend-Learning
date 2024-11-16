import { join } from "path";

const homeController = (req, res) => {
  res.sendFile(join(process.cwd(), "Views", "index.html"));
};

export { homeController };
