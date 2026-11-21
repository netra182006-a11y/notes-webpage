import { useState } from "react";
import Header from "./header.jsx";
import Sidebar from "./sidebar.jsx";
import Main from "./mainContent.jsx";
import Notes from "./note.jsx";
import MoodTracker from "./moodtracker.jsx";
import DailyMotivation from "./dm.jsx";
import Footer from "./footer.jsx";

import "./App.css";
import "./header.css";
import "./sidebar.css";
import "./main.css";
import "./note.css";
import "./moodtracker.css";
import "./dm.css";
import "./footer.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedMood, setSelectedMood] = useState("Happy");

  function handleSelectMood(mood) {
    setSelectedMood(mood);
    setActivePage("motivation");
  }

  return (
    <div className="app">
      <Header setActivePage={setActivePage} />

      <div className="content">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <div className="page-area">
          {activePage === "home" && <Main setActivePage={setActivePage} />}
          {activePage === "notes" && <Notes />}
          {activePage === "mood" && (
            <MoodTracker onSelectMood={handleSelectMood} />
          )}
          {activePage === "motivation" && (
            <DailyMotivation
              mood={selectedMood}
              onBack={() => setActivePage("mood")}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;