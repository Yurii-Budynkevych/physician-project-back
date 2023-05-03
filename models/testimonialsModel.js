const mongoose = require("mongoose");

const testimonialsDbSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  testimonial: { type: String, required: true, trim: true },
});

const TestimonialsDbModel = mongoose.model(
  "testimonials",
  testimonialsDbSchema
);

module.exports = {
  TestimonialsDbModel,
};
