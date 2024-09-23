import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db';
import authRoutes from "./routes/authRoutes"

dotenv.config();
connectDB();

const app = express();

//Leer datos de formularios
app.use(express.json())

//Routes
app.use('/api/auth', authRoutes)

export default app;