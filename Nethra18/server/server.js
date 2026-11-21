require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Note = require("./models/note.js");
const Mood = require("./models/mood.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mindly backend is running");
});

// Notes routes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

app.post("/api/notes", async (req, res) => {
  try {
    const newNote = await Note.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ error: "Failed to save note" });
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(400).json({ error: "Failed to delete note" });
  }
});

// Moods routes
app.get("/api/moods", async (req, res) => {
  try {
    const moods = await Mood.find().sort({ createdAt: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch moods" });
  }
});

app.post("/api/moods", async (req, res) => {
  try {
    const newMood = await Mood.create({
      mood: req.body.mood,
      note: req.body.note,
    });
    res.status(201).json(newMood);
  } catch (err) {
    res.status(400).json({ error: "Failed to save mood" });
  }
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });