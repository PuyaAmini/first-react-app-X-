import "./NewEventForm.css";
import React, { useState , useRef } from "react";

export default function NewEventForm({addEvent}) {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");
  const title = useRef();
  const date = useRef()

  const resetValues = () =>{
      //  setDate('');
      //  setTitle('');
      date.current.value = ''
      title.current.value = ''
  }

  // submit func:
  const handleSubmit = (e) => {
     e.preventDefault()
     const event = {
      //  title: title,
      //  date: date,
      title:title.current.value,
      date:date.current.value,

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
        // value={title} onChange={(e) => setTitle(e.target.value)} 
         ref={title}/>
      </label>
      <label>
        <span>Date</span>
        <input type="date" 
        // value={date} onChange={(e) => setDate(e.target.value)}
         ref={date} />
      </label>
      <button>Submit..</button>

    </form>
  );
}
