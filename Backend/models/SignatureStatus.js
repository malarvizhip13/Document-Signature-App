const mongoose = require("mongoose");

const signatureStatusSchema = new mongoose.Schema({
  fileId: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "Signed", "Rejected"],
    default: "Pending",
  },

  reason: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model(
  "SignatureStatus",
  signatureStatusSchema
);