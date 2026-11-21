import { useState, useEffect } from "react";
import "./note.css";

const API_URL = "http://localhost:5000/api/notes";

function Notes() {
  const [notesList, setNotesList] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch notes");
        const data = await res.json();
        setNotesList(data);
      } catch (err) {
        console.error("Error loading notes:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);

  async function handleAddNote(e) {
    e.preventDefault();
    if (!title.trim() && !content.trim()) return;

    const payload = {
      title: title.trim() || "Untitled Note",
      content: content.trim() || " ",
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save note");

      const createdNote = await res.json();
      setNotesList([createdNote, ...notesList]);
      setTitle("");
      setContent("");
      setIsAdding(false);
    } catch (err) {
      console.error("Error saving note:", err);
    }
  }

  async function handleDeleteNote(id) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete note");

      setNotesList(notesList.filter((item) => (item._id || item.id) !== id));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  }

  function formatDate(dateString) {
    if (!dateString) return "Today";
    const parsed = new Date(dateString);
    return Number.isNaN(parsed.getTime())
      ? dateString
      : parsed.toLocaleDateString();
  }

  return (
    <section className="notes-page">
      <div className="notes-header">
        <h2>My Notes ♡</h2>
        <p>Write down important thoughts, ideas, and reminders.</p>
      </div>

      {isAdding && (
        <form className="note-form-card" onSubmit={handleAddNote}>
          <input
            type="text"
            placeholder="Note title (e.g., Gratitude Journal)..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="note-title-input"
          />
          <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="note-body-input"
          />
          <div className="note-form-actions">
            <button type="submit" className="note-save-btn">
              Save Note
            </button>
            <button
              type="button"
              className="note-cancel-btn"
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="notes-grid">
        {loading ? (
          <p className="note-card-text">Loading notes...</p>
        ) : (
          notesList.map((item) => {
            const noteId = item._id || item.id;
            return (
              <article className="note-card" key={noteId}>
                <div className="note-card-top">
                  <h3>{item.title}</h3>
                  <button
                    type="button"
                    className="note-delete-btn"
                    onClick={() => handleDeleteNote(noteId)}
                    title="Delete note"
                  >
                    ×
                  </button>
                </div>
                <p className="note-card-text">{item.content}</p>
                <span className="note-card-date">
                  Last updated: {formatDate(item.updatedAt)}
                </span>
              </article>
            );
          })
        )}

        <button
          type="button"
          className="note-add-tile"
          onClick={() => setIsAdding(true)}
        >
          <span className="plus-sign">+</span>
          <span>Add New Note</span>
        </button>
      </div>
    </section>
  );
}

export default Notes;