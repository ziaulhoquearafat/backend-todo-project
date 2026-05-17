import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/databse.js';

const app = express();
dotenv.config();

connectDB();

const PORT = process.env.PORT || 8000;


app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
})
