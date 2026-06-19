const express = require("express");
const Audit = require("../models/Audit");

const router = express.Router();

router.get("/:fileId", async (req, res) => {
  try {
    const audits = await Audit.find({
      fileId: req.params.fileId,
    });

    res.json(audits);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching audit logs",
    });
  }
});

module.exports = router;