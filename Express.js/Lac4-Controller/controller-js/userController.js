const user = (req, res) => {
  res.send("Home Route");
};

const userSelectProduct = (req, res) => {
  const { category, id } = req.params;
  if (id == 10 && category == "shirt") {
    res.send(`User Select product category is ${category} and ID is ${id}`);
  } else {
    res.send("User product category and id is not found");
  }
};

export { user, userSelectProduct };
