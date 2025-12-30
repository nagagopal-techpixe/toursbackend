import express from "express";
import cors from "cors";
import connectDB from "./config/db.js"; // your MongoDB connection
import TourRoutes from "./routes/routes.js";

const app = express();

// Connect DB
connectDB();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cors());
app.use(express.json());
app.use("/api/tours", TourRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
