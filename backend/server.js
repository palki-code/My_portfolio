require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── Data ─────────────────────────────────────────────────────────────────────
const projects = require("./data/projects.json");
const skills = require("./data/skills.json");

// ─── Routes ───────────────────────────────────────────────────────────────────

// GET all projects
app.get("/api/projects", (req, res) => {
  res.json({ success: true, data: projects });
});

// GET all skills
app.get("/api/skills", (req, res) => {
  res.json({ success: true, data: skills });
});

// POST contact message (DB integration ready – just logs for now)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "All fields are required." });
  }

  // TODO: Save to database when DB is integrated
  console.log("📬 New Contact Message:");
  console.log(`   Name   : ${name}`);
  console.log(`   Email  : ${email}`);
  console.log(`   Message: ${message}`);
  console.log(`   Time   : ${new Date().toISOString()}`);

  res.status(200).json({
    success: true,
    message: "Message received! I'll get back to you soon.",
  });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "Portfolio API is running 🚀" });
});

// ─── Start ────────────────────────────────────────────────────────────────────
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Portfolio API running on http://localhost:${PORT}`);
  });
}

module.exports = app;
