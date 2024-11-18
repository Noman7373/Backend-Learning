const logmiddleWare = (err, req, res, next) => {
  console.log("MiddleWare", err);
  res.status(500).send("Something Broke");
  next();
};

export default logmiddleWare;
