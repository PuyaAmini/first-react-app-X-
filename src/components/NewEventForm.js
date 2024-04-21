import React from 'react'
import "./NewEventForm.css"
export default function NewEventForm() {
  return (
    <form className='new-event-form'>
       <label>
              <span>Event:</span>
              <input type='text'/>
       </label>
       <label>
              <span>Date</span>
              <input type='date'/>
       </label>
      <button>Add..</button>
    </form>
  )
}
