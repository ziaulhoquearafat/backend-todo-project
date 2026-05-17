import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/databse.js';
import userRoutes from './routes/user.routes.js';
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());


app.use("/api/v1/user", userRoutes);

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})
