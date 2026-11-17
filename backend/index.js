import express from "express";
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js'

dotenv.config();
const app = express();
app.use(express.json());

// Test api
app.get('/', (req, res) => {
  res.status(200).send("Welcome")
})

// ROUTES
app.use('/api/auth', authRoutes);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});