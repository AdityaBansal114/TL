import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js"
dotenv.config();

const PORT= process.env.PORT;
const app= express();

app.use(express.json());

app.use("/api/auth",authRoutes);

app.listen(PORT, async()=>{
    connectDB();
    console.log(`server is running on PORT : ${PORT}`);
})
