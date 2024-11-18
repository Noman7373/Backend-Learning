const homePage = (req, res) => {
  let title = "Home";

  res.render("index", { title });
};

export { homePage };
