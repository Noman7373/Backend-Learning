const underConstruction = (req, res, next) => {
  res.render("siteuc", { title: "My Website - Under Construction" });
};

export default underConstruction;
