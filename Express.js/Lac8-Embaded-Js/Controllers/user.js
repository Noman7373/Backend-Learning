const userPage = (req, res) => {
  const userInfo = {
    user: true,
    name: "Noman",
    email: "abc@gmail.com",
    isAdmin: true,
  };

  const { user, name, email, isAdmin } = userInfo;

  res.render("index", { user, name, email, isAdmin });
};

export { userPage };
