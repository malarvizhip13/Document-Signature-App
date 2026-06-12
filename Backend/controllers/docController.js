const Document = require("../models/Document");

// GET ALL FILES
exports.getAllDocs = async (req, res) => {
  try {
    const docs = await Document.find().sort({ uploadedAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};