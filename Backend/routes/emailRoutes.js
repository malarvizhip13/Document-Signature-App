const express = require("express");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const router = express.Router();
console.log("email routes loaded")
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
router.post("/send-email", async(req, res) => {
console.log(req.body);
  const { email } = req.body;
  const token = crypto.randomBytes(16).toString("hex");

  const link = `http://localhost:5173/sign/${token}`;
  try {

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Document Signature Request",
      text: `Please sign using this link: ${link}`,
    });

  res.json({
    token,
    link
  });
    } catch (error) {

    console.log("email error:",error);

    res.status(500).json({
      message: "Email Failed"
    });
  }
});

module.exports = router;