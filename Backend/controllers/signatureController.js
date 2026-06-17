const Signature = require("../models/Signature");

const saveSignaturePosition = async (req, res) => {
  try {
    console.log("RECEIVED DATA:", req.body);

    
    const { fileId, signer, x, y } = req.body;
 console.log("fileId =", fileId);
console.log("signer =", signer);

    const signature = await Signature.create({
      fileId,
      signer,
      x,
      y,
    });
    

console.log("SAVED TO DB:", signature);


    res.status(201).json(signature);
   } catch (error) {
  console.log("ERROR:", error);

  res.status(500).json({
    message: error.message,
  });
}
};

const getSignatures = async (req, res) => {
  try {
    const signatures = await Signature.find({
      fileId: req.params.fileId,
    });

    res.json(signatures);
 } catch (error) {
  console.log("ERROR:", error);

  res.status(500).json({
    message: error.message,
  });
}
};

module.exports = { saveSignaturePosition,getSignatures,};