const express = require("express");
const router = express.Router();

const {
  saveSignaturePosition,
  getSignatures,
} = require("../controllers/signatureController");

router.post("/", saveSignaturePosition);

router.get("/:fileId", getSignatures);

module.exports = router;