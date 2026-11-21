import "./header.css";

function Header({ setActivePage }) {
  return (
    <header className="top-header">
      <div className="header-logo" onClick={() => setActivePage("home")}>
        ✿ Mindly
      </div>

      <nav className="header-nav">
        <button type="button" onClick={() => setActivePage("home")}>
          Home
        </button>
        <button type="button" onClick={() => setActivePage("notes")}>
          My Notes
        </button>
        <button type="button" onClick={() => setActivePage("mood")}>
          Mood Tracker
        </button>
        <button type="button" onClick={() => setActivePage("motivation")}>
          Daily Motivation
        </button>
        <span className="header-heart">♡</span>
      </nav>
    </header>
  );
}

export default Header;