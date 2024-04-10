import "./NewEventForm.css";
import React, { useState } from "react";

export default function NewEventForm({addEvent}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const restValues = () =>{
       setDate('');
       setTitle('');
  }
  const handleSubmit = (e) => {
     e.preventDefault()
     const event = {
       title: title,
       date: date,
       id : Math.floor(Math.random() * 10000)
     }
     addEvent(event)
     restValues()
  }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event:</span>
        <input type="text" value={title}
         onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Date</span>
        <input type="date" value={date}
        onChange={(e) => setDate(e.target.value)} />
      </label>
      <button>Submit..</button>
      <p>
        title: {title} - date: {date}
      </p>
    </form>
  );
}
