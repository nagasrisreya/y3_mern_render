import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ FIXED: Use only the route path, not full URL
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node + Express backend!" });
});

// ✅ Optional: health check endpoint for Render
app.get("/", (req, res) => {
  res.send("Server is up and running 🚀");
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
