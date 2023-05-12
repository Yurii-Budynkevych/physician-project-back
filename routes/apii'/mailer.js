const express = require("express");
const nodemailer = require("nodemailer");
const Joi = require("joi");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(1).max(30).trim().required(),
    email: Joi.string().email().trim().required(),
    tel: Joi.string().min(5).max(30).trim().required(),
    text: Joi.string().min(1).max(3000).trim().required(),
  });

  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res
      .status(400)
      .json({ message: "bad request", info: validationResult.error });
  }

  const { name, email, tel, text } = req.body;

  const message = {
    from: process.env.MAILER_API_USER,
    to: "dantax13@gmail.com",
    subject: "Новий пацієнт ✔",
    text: `${name} записався на консультацію!
     Контактні дані: пошта - ${email}, телефон - ${tel}.
     Суть питання - ${text}.
     Зв'яжіться з пацієнтом якнайшвидше!`,
  };

  const config = {
    service: "gmail",
    auth: {
      user: process.env.MAILER_API_USER,
      pass: process.env.MAILER_API_KEY,
    },
  };

  const transporter = nodemailer.createTransport(config);

  transporter
    .sendMail(message)
    .then(() => res.status(201).json({ message: "email sent" }))
    .catch((error) => res.status(500).json({ message: error }));
});

module.exports = router;
