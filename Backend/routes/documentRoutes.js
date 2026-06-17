const express = require("express");
const multer = require("multer");
const Document = require("../models/Document");

const router = express.Router();
const { getAllDocs } = require("../controllers/docController");

router.get("/", getAllDocs);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files allowed"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

router.post("/upload", upload.single("pdf"), async (req, res) => {
  try {
    const document = await Document.create({
      fileName: req.file.filename,
      filePath: req.file.path,
      fileSize: req.file.size,
    });

    res.status(201).json({
      message: "PDF Uploaded Successfully",
      document,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;