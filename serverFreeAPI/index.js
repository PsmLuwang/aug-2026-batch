import express from "express";
import cors from "cors";

const app = express(); 
app.use(cors());
app.use(express.json()); 

const students = [];

// POST Method // http://localhost:5000/createStudent
app.post("/createStudent", (req, res) => {
  try {
    const student = {...req.body, id: Date.now()};
    students.unshift(student);
    
    res.status(201).json({
      success: true,
      message: "Created New Student",
      student: student
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Invalid Data" })
  }
})


// GET Method // http://localhost:5000/getStudents
app.get("/getStudents", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Fetch All Students",
      students
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

app.get("/", (req, res) => {
  try {
    res.send("Server is running.")
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})