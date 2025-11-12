const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const authRoutes = require("./routes/authRoute");

// Use routes
app.use("/api/auth", authRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Taskly backend is running");
});

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;

app.post("/test", (req, res) => {
  res.send("POST request working!");
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
