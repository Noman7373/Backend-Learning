const homePage = (req, res) => {
  res.render("index" , {title : "Home"});
};

export { homePage };
