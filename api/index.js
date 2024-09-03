import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";

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

app.use(express.json());

app.use("/api/auth",authRouter);

app.listen(port,()=>{
    console.log(`Listenning on port ${port}`);
});