const express = require("express");
const Joi = require("joi");
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
  const schema = Joi.object({
    name: Joi.string().min(1).max(30).trim().required(),
    testimonial: Joi.string().min(1).max(3000).trim().required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res
      .status(400)
      .json({ message: "bad request", info: validationResult.error });
  }

  const { name, testimonial } = req.body;

  try {
    const result = await TestimonialsDbModel.create({ name, testimonial });
    res.json(result);
  } catch (error) {
    res.status(500).send("testimonials post error");
  }
});

module.exports = router;
