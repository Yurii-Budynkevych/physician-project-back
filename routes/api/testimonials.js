const express = require("express");
const { TestimonialsDbModel } = require("../../models/testimonialsModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await TestimonialsDbModel.find({});
    res.json(data);
  } catch (error) {
    res.status(500).send("testimonials get error");
  }
});

router.post("/", async (req, res, next) => {
  const { name, testimonial } = req.body;
  try {
    const result = await TestimonialsDbModel.create({ name, testimonial });
    res.json(result);
  } catch (error) {
    res.status(500).send("testimonials post error");
  }
});

module.exports = router;
