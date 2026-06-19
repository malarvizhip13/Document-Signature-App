const express = require("express");
const router = express.Router();

const SignatureStatus = require("../models/SignatureStatus");


router.post("/create", async (req, res) => {
  try {
    const status = await SignatureStatus.create({
      fileId: req.body.fileId,
    });

    res.json(status);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/sign/:fileId", async (req, res) => {
  try {
    const result = await SignatureStatus.findOneAndUpdate(
      {
        fileId: req.params.fileId,
      },
      {
        status: "Signed",
      },
      {
        new: true,
      }
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/reject/:fileId", async (req, res) => {
  try {
    const result = await SignatureStatus.findOneAndUpdate(
      {
        fileId: req.params.fileId,
      },
      {
        status: "Rejected",
        reason: req.body.reason,
      },
      {
        new: true,
      }
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:fileId", async (req, res) => {
  try {
    const result = await SignatureStatus.findOne({
      fileId: req.params.fileId,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;