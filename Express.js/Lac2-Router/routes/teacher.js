import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Teacher Home Page");
});

router.get("/about", (req, res) => {
  res.send("Teacher About Page");
});

router.get("/contact", (req, res) => {
  res.send("Teacher Contact Page");
});

export default router;
