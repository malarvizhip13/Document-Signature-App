 const express =require('express');
   const cors = require('cors');
   const mongoose = require('mongoose');
   require ('dotenv').config();

   const authRoutes = require("./routes/authRoutes");
   const documentRoutes = require("./routes/documentRoutes");
   const signatureRoutes = require("./routes/signatureRoutes");
   const emailRoutes = require("./routes/emailRoutes");
   const auditRoutes = require("./routes/auditRoutes");
   const statusRoutes = require("./routes/statusRoutes");
   const app =express();
  
    
app.use(cors());
   app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/uploads", express.static("uploads"));

   app.use("/api/auth", authRoutes);

app.use("/api/docs", documentRoutes);
app.use("/api/signatures", signatureRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/audit", auditRoutes);
app.use("/api/status", statusRoutes);
 const mongoDB=process.env.mongoDB_URL;

 mongoose.connect(mongoDB)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("no connection",error);
  });

   app.listen(5000,()=>{
    console.log('server running')
   })

   
   