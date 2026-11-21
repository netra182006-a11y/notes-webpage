import "./main.css";

function MainContent({ setActivePage }) {
  return (
    <main className="home-main">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-text">
          <h1>Welcome to Mindly ♡</h1>
          <h3>Your Mind Matters. Your Feelings Matter.</h3>
          <p>
            Mindly is a mental wellness space where you can express your
            thoughts, track your moods and take care of your emotional
            well-being.
          </p>
          <button
            type="button"
            className="explore-btn"
            onClick={() => setActivePage("notes")}
          >
            Explore More →
          </button>
        </div>
      </section>

      {/* 3 Feature Cards */}
      <section className="feature-cards-row">
        <div className="feature-card">
          <div className="feature-icon">📌</div>
          <h4>My Notes</h4>
          <p>Write and save your thoughts.</p>
          <button type="button" onClick={() => setActivePage("notes")}>
            Go to Notes →
          </button>
        </div>

        <div className="feature-card">
          <div className="feature-icon">☁️</div>
          <h4>Mood Tracker</h4>
          <p>Track your daily emotions.</p>
          <button type="button" onClick={() => setActivePage("mood")}>
            Track Mood →
          </button>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⭐</div>
          <h4>Daily Motivation</h4>
          <p>Read positive quotes.</p>
          <button type="button" onClick={() => setActivePage("motivation")}>
            Get Inspired →
          </button>
        </div>
      </section>

      {/* Bottom Quote Banner */}
      <section className="bottom-quote-banner">
        <p>“ A peaceful mind creates a beautiful life. ” ♡</p>
      </section>
    </main>
  );
}

export default MainContent;