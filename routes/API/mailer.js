const express = require("express");
const { sendEmail } = require("../../controllers/mailerControllers");

const router = express.Router();

router.post("/", sendEmail);

module.exports = router;
