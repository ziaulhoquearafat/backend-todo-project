import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/databse.js';
import userRoutes from './routes/user.routes.js';
const app = express();
dotenv.config();
connectDB();

app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})
