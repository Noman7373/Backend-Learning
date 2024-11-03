import express from "express";

const router = express.Router();

router.get("", (req, res) => {
  res.send("Student Home Page");
});

router.get("/about", (req, res) => {
  res.send("Student About Page");
});

router.get("/contact", (req, res) => {
  res.send("Student Contact Page");
});

export default router;
