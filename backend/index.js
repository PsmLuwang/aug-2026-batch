import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from './routes/auth.route.js'
import orderRoutes from './routes/order.route.js'
import connectDB from "./utils/connectDB.js";
dotenv.config();

const FRONTEND_URL = process.env.NODE_ENV == "development" 
? ["http://localhost:5173"] 
: [process.env.CLIENT_URL, process.env.CLIENT_URL_WWW]

const app = express();
app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }))


// ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);


connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});