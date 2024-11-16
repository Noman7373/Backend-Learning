const productDetail = (req, res) => {
  const { id, category } = req.params;

  res.send(
    `Product Name is VivoS21 , category is ${category} and product id is ${id}`
  );
};

export default productDetail;
