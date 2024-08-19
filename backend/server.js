import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import cookieParser from 'cookie-parser';
dotenv.config();

const PORT= process.env.PORT;
const app= express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.use("/api/messages",messageRoutes);

app.listen(PORT, async()=>{
    connectDB();
    console.log(`server is running on PORT : ${PORT}`);
})

