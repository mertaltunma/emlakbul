import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

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

app.get('/hello', (req, res)=>{
    res.send("Hello World");
});

app.use("/api/user",userRouter);

app.listen(port,()=>{
    console.log(`Listenning on port ${port}`);
});