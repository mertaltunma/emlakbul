import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log("Connected to database successfully.")
})
.catch((error)=>{
    console.log(error);
});

const app = express();
const port=3000;

app.listen(port,()=>{
    console.log(`Listenning on port ${port}`);
});