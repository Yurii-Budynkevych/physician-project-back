const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema({
  name: String,
  testimonial: String,
});

const sendTestimonial = async (body) => {};

module.exports = {
  sendTestimonial,
};
