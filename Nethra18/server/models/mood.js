const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema(
  {
    mood: { type: String, required: true },
    note: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mood", moodSchema);