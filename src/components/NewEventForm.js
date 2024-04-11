import "./NewEventForm.css";
import React, { useState} from "react";

export default function NewEventForm({addEvent}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location , setLocation] = useState('MARS')

  const resetValues = () =>{
       setDate('');
       setTitle('');
       setLocation('MARS')
  }

  // submit func:
  const handleSubmit = (e) => {
     e.preventDefault()
     const event = {
       title: title,
       date: date,
       location: location,
       id : Math.floor(Math.random() * 100000) //random id generation
     }
     addEvent(event)
     resetValues()
  }


  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event:</span>
        <input type="text" 
        value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        <span>Date</span>
        <input type="date" 
        value={date} onChange={(e) => setDate(e.target.value)}/>
      </label>
      
      <button>Submit..</button>
    <label>
      <span>location: </span>
      <select onChange={(e) => setLocation(e.target.value)}>
        <option value={'london'}>"London"</option>
        <option value={'washington'}>"Washington"</option>
        <option value={'tehran'}>"Tehran"</option>
        <option value={'moscow'}>"Moscow"</option>
        <option value={'tokyo'}>"Tokyo"</option>
        <option value={'beijing'}>"Beijing"</option>
      </select>
    </label>
    </form>
  );
}
