const aboutPage = (req, res) => {
  let title = "About";
  res.render("about", { title });
};

export { aboutPage };
