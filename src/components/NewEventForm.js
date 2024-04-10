import "./NewEventForm.css";
import React from "react";

export default function NewEventForm() {
  return (
    <form className="new-event-form">
      <label>
        <span>Event:</span>
        <input type="text" />
      </label>
      <label>
       <span>Date</span>
       <input type="date"/>
      </label>
      <button>Submit..</button>
    </form>
  );
}
