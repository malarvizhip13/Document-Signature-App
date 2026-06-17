const express = require("express");
const router = express.Router();

const {
  saveSignaturePosition,
  getSignatures,
} = require("../controllers/signatureController");

router.post("/", (req, res, next) => {
  console.log("RECEIVED DATA:", req.body);
  next();
}, saveSignaturePosition);
router.get("/:fileId", getSignatures);


module.exports = router;