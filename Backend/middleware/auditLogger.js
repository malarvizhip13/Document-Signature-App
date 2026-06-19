const Audit = require("../models/Audit");

const auditLogger = async (req, res, next) => {
  try {
    await Audit.create({
      fileId: req.body.fileId,
      signedBy: req.body.signedBy,
      ipAddress: req.ip,
    });
    next();
  } catch (error) {
    console.log("audit error", error);
    res.status(500).json({
      message: "Audit logging failed",
      message:error.message
    });
  }
};
module.exports = auditLogger;