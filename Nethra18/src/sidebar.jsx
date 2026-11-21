import "./sidebar.css";

function Sidebar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-lotus">✿</div>
        <h2>Mindly</h2>
      </div>

      <hr className="sidebar-divider" />

      <nav className="sidebar-menu">
        <button
          type="button"
          className={activePage === "home" ? "active" : ""}
          onClick={() => setActivePage("home")}
        >
          🏠 Home
        </button>
        <button
          type="button"
          className={activePage === "notes" ? "active" : ""}
          onClick={() => setActivePage("notes")}
        >
          📝 My Notes
        </button>
        <button
          type="button"
          className={activePage === "mood" ? "active" : ""}
          onClick={() => setActivePage("mood")}
        >
          😊 Mood Tracker
        </button>
        <button
          type="button"
          className={activePage === "motivation" ? "active" : ""}
          onClick={() => setActivePage("motivation")}
        >
          ⭐ Daily Motivation
        </button>
      </nav>

      <div className="sidebar-quote">
        <p>Take care of your mind ♡</p>
      </div>
    </aside>
  );
}

export default Sidebar;