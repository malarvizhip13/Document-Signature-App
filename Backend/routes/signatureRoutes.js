 const express = require("express");

const fs = require("fs");

const { PDFDocument } = require("pdf-lib");

const router = express.Router();

router.post("/sign", async (req, res) => {

 try {
    console.log("SIGN API HIT");

const path = require("path");

const filePath = path.join(__dirname, "../input.pdf");
const existingPdfBytes = fs.readFileSync(filePath);

  const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const pages = pdfDoc.getPages();
  const firstPage = pages[0];

    firstPage.drawText("Signed by User", {
    x: 100,
    y: 150,
    size: 20,
  }); 

    const pdfBytes = await pdfDoc.save();
      fs.writeFileSync("signed-output.pdf", pdfBytes);
        res.json({
    message: "PDF signed successfully",
    file: "signed-output.pdf"
  });
 } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error signing PDF" });
  }
});

const {
  saveSignaturePosition,
  getSignatures,
} = require("../controllers/signatureController");

router.post("/", (req, res, next) => {
  console.log("RECEIVED DATA:", req.body);
  next();
}, saveSignaturePosition);
router.get("/file/:fileId", getSignatures);


module.exports = router;