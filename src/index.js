import dotenv from "dotenv";
import connectDB from "./db/index.js"; // or index.js if you renamed it

import express from "express";

const app = express();   // ✅ THIS LINE IS REQUIRED
// Manually point to the file in the root
dotenv.config({
    path: './.env' 
});

console.log("ENV CHECK:", process.env.MONGODB_URI);

connectDB()







// .then(()=>{
//     app.listen(process.env.PORT || 8000, ()=>{
//         console.log(`server is running at port: ${process.env.PORT}`);
//     })
// })

// .catch((err)=>{
//     console.log("MONGO db connection failed !!!", err);
// })



















































































































// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

/*
import express from "express"
const app= express()
( async()=>{
 try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    // exprees jab baat na kar pa rahe ho 
    app.on("error", (error)=>{    
        console.log("ERR:", error);
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })
 }

 catch(error){
    console.error("ERROR: ", error)
    throw error
 }

})
  

()     */