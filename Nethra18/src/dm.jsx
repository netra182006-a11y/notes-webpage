import { useState, useEffect } from "react";
import "./dm.css";

const MOTIVATION_QUOTES = {
  Happy: [
    "You deserve every bit of happiness you feel today. Let it stay a little longer.",
    "Share your warmth today—small moments of joy multiply when noticed.",
    "Let your happiness grow gently and savor the good around you.",
    "Smile softly at how far you have come—your light matters.",
    "Good energy looks great on you; keep holding onto what uplifts you.",
    "Celebrate the little wins today; every bright moment counts.",
    "Carry this cheerful spark forward into the rest of your week.",
  ],
  Calm: [
    "Peace begins the moment you stop rushing yourself.",
    "A quiet mind is a steady anchor. Breathe in ease.",
    "Stillness is not doing nothing; it is making room to breathe.",
    "There is strength in moving at a calm, unhurried pace.",
    "Let go of unnecessary noise and stay rooted in the present.",
    "Softness and clarity go hand in hand when you slow down.",
    "Protect this peaceful space within you today.",
  ],
  Sad: [
    "It is okay to feel heavy today. You don't have to force a smile right now.",
    "Even cloudy skies pass in their own gentle time. Be kind to yourself.",
    "One small, soft step is enough for today.",
    "Your feelings are valid, even on days when everything feels weightier.",
    "You don't have to carry it all in one sitting—take it minute by minute.",
    "Gentle care is allowed on hard days; treat yourself like a dear friend.",
    "Tomorrow holds fresh light, even if today feels dim.",
  ],
  Anxious: [
    "You do not have to solve every tomorrow in this single breath.",
    "Ground your feet, unclench your jaw, and focus only on this moment.",
    "Worrying is not preparing. Take a slow breath and give yourself grace.",
    "You have handled uncertain moments before, and you can handle this one too.",
    "Name what is actually in front of you right now, not what might happen.",
    "Slow down your exhale—your body can find safety step by step.",
    "One calm thought at a time is more than enough.",
  ],
  Grateful: [
    "Gratitude turns what we have into enough—and makes today feel fuller.",
    "Notice one quiet blessing right in front of you today.",
    "Thankfulness is a gentle light that warms ordinary days.",
    "Appreciating the little things helps anchor your heart in the present.",
    "Even small comforts remind us we are supported.",
    "Hold onto the people, moments, and lessons that shaped you kindly.",
    "A grateful heart turns simple days into meaningful ones.",
  ],
  Tired: [
    "Rest is productive when your mind and body need recovery.",
    "Give yourself permission to slow down without guilt.",
    "Even a short pause can help you recharge gently.",
    "You don't have to earn your rest by burning out first.",
    "Lower the bar for today and let your energy recover.",
    "Quiet rest is a gift you give your future self.",
    "Take things lightly today—recovery is part of progress.",
  ],
};

function DailyMotivation({ mood = "Happy", onBack }) {
  const quotes = MOTIVATION_QUOTES[mood] || MOTIVATION_QUOTES.Happy;
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    setQuoteIndex(0);
  }, [mood]);

  function handleNextInspiration() {
    setQuoteIndex((prev) => (prev + 1) % quotes.length);
  }

  return (
    <section className="motivation-page">
      <div className="motivation-card">
        <span className="today-feeling-badge">TODAY&apos;S FEELING</span>
        <h2 className="motivation-mood-title">{mood}</h2>
        <p className="motivation-subtitle">
          A little reminder for your {mood.toLowerCase()} heart. ({quoteIndex + 1}/{quotes.length})
        </p>

        <div className="motivation-cloud-banner">☁ ♡ ☁</div>

        <blockquote className="motivation-quote-box">
          “{quotes[quoteIndex]}”
        </blockquote>

        <p className="take-feeling-line">Take this feeling with you ♡</p>

        <div className="motivation-actions">
          <button
            type="button"
            className="next-inspiration-btn"
            onClick={handleNextInspiration}
          >
            Next Inspiration ↗
          </button>

          <button
            type="button"
            className="back-mood-btn"
            onClick={onBack}
          >
            ← Back to Mood Tracker
          </button>
        </div>
      </div>
    </section>
  );
}

export default DailyMotivation;