import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db';
import authRoutes from "./routes/authRoutes"
import projectRoutes from "./routes/projectRoutes"
import morgan from 'morgan';

dotenv.config();
connectDB();

const app = express();

//Logging
app.use(morgan('dev'));

//Leer datos de formularios
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes)
app.use('/api/projects', projectRoutes)

export default app;