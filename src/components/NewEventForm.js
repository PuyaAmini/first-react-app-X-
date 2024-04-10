import "./NewEventForm.css";
import React, { useState } from "react";

export default function NewEventForm() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  return (
    <form className="new-event-form">
      <label>
        <span>Event:</span>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Date</span>
        <input type="date" onChange={(e) => setDate(e.target.value)} />
      </label>
      <button>Submit..</button>
      <p>
        title: {title} - date: {date}
      </p>
    </form>
  );
}
