const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  fileId: String,
  signedBy: String,
  signedAt: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
});

module.exports = mongoose.model("Audit", auditSchema);