import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import donationRoutes from "./routes/donationRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/donations", donationRoutes);

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);