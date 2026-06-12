 const express =require('express');
   const cors = require('cors');
   const mongoose = require('mongoose');
   require ('dotenv').config();

   const authRoutes = require("./routes/authRoutes");
   const documentRoutes = require("./routes/documentRoutes");
   const app =express();
   const mongoDB=process.env.mongoDB_URL;
   
app.use(cors());
   app.use(express.urlencoded({extended:true}))
app.use(express.json());
   app.use("/api/auth", authRoutes);
    mongoose.connect(mongoDB)
    .then(()=>{
   console.log('mongodb connected')
})
.catch(()=>{
console.log('no connction')
})
app.use("/uploads", express.static("uploads"));
app.use("/api/docs", documentRoutes);

   app.listen(5000,()=>{
    console.log('server running')
   })