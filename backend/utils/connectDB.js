import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected!");
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1)
  }
}