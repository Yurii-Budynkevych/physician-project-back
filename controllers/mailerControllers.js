const nodemailer = require("nodemailer");
// dantax13@gmail.com

const sendEmail = async (req, res, next) => {
  let message = {
    from: process.env.MAILER_API_USER,
    to: "dantax13@gmail.com",
    subject: "Новий пацієнт ✔",
    text: "Невже у березані є гугл?",
  };

  let config = {
    service: "gmail",
    auth: {
      user: process.env.MAILER_API_USER,
      pass: process.env.MAILER_API_KEY,
    },
  };

  let transporter = nodemailer.createTransport(config);

  transporter
    .sendMail(message)
    .then(() => res.status(201).json({ message: "email sent" }))
    .catch((error) => res.status(500).json({ message: error }));
};

module.exports = {
  sendEmail,
};
