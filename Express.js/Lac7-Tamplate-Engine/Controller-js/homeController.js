// import { join } from "path";

const userHomePage = (req, res) => {
  //   res.render("index")
  // to pass the local variables
  res.render("index", { name: "Noman Ahmed" });
};

export { userHomePage };
