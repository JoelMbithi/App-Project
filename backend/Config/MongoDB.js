import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

console.log("MONGO_URL from env:", process.env.MONGO_URL); // Debugging step

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined in .env file");
    }

    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Digicare_Doc",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export default connectDB;
