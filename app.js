import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/databse.js';
import todoRoutes from './routes/todo.routes.js';
import userRoutes from './routes/user.routes.js';
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
app.use(cookieParser())


app.use("/api/v1/user", userRoutes);
app.use("/api/v1/todo", todoRoutes);

// http://localhost:3000/api/v1/user
// http://localhost:3000/api/v1/todo

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})
