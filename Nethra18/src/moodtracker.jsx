import { useState, useEffect } from "react";
import "./moodtracker.css";

const API_URL = "http://localhost:5000/api/moods";

const MOODS = [
  {
    name: "Happy",
    label: "Happy",
    tagline: "Bright & cheerful",
    cloudColor: "#fde2e8",
    face: "^ ‿ ^",
  },
  {
    name: "Calm",
    label: "Calm",
    tagline: "Soft & peaceful",
    cloudColor: "#e6f0fa",
    face: "◡ ‿ ◡",
  },
  {
    name: "Sad",
    label: "Sad",
    tagline: "Heavy & gentle",
    cloudColor: "#dde4ec",
    face: "• ︵ •",
  },
  {
    name: "Anxious",
    label: "Anxious",
    tagline: "Restless & worried",
    cloudColor: "#e8e4f5",
    face: "o ﹏ o",
  },
  {
    name: "Grateful",
    label: "Grateful",
    tagline: "Warm & thankful",
    cloudColor: "#fce8dc",
    face: "♡ ‿ ♡",
  },
  {
    name: "Tired",
    label: "Tired",
    tagline: "Sleepy & low energy",
    cloudColor: "#ece5f5",
    face: "- ‿ -  zZ",
  },
];

function MoodTracker({ onSelectMood }) {
  const [recentMood, setRecentMood] = useState(null);

  useEffect(() => {
    async function fetchLatestMood() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch moods");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRecentMood(data[0].mood);
        }
      } catch (err) {
        console.error("Error loading moods:", err);
      }
    }

    fetchLatestMood();
  }, []);

  async function handleMoodClick(moodName) {
    setRecentMood(moodName);

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood: moodName }),
      });
    } catch (err) {
      console.error("Error saving mood:", err);
    }

    if (onSelectMood) {
      onSelectMood(moodName);
    }
  }

  return (
    <section className="mood-tracker-page">
      <div className="mood-tracker-header">
        <span className="mood-pill">HOW ARE YOU FEELING TODAY?</span>
        <h2>Choose Your Mood Cloud</h2>
        <p>
          Tap a cloud to open a daily motivation quote for your mood.
          {recentMood ? ` (Last logged: ${recentMood})` : ""}
        </p>
      </div>

      <div className="mood-clouds-grid">
        {MOODS.map((mood) => (
          <button
            type="button"
            key={mood.name}
            className="mood-cloud-card"
            onClick={() => handleMoodClick(mood.name)}
          >
            <div
              className="cloud-shape"
              style={{ backgroundColor: mood.cloudColor }}
            >
              <span className="cloud-face">{mood.face}</span>
            </div>
            <strong className="mood-name">{mood.label}</strong>
            <span className="mood-tagline">{mood.tagline}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default MoodTracker;