const express = require("express");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    res.json({ message: "template message" });
  } catch (error) {
    res.status(500).send("testimonials error");
  }
});

module.exports = router;
