import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

// API Endpoint "/"
app.get('/', (req, res) => {
  res.status(200).send("Welcome")
})

// API Endpoint "/sample-user"
app.get('/sample-user', (req, res) => {
  res.status(200).json({ name: "Priyansu", phone: "1234567890" })
})


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});