import React, { useState } from 'react'
import "./NewEventForm.css"
export default function NewEventForm() {
       const [title, setTitle] = useState('')
       const [date, setDate] = useState('')
       const resetValues = () => {
              setDate('');
              setTitle('');
       }
       return (
              <form className='new-event-form'>
                     <label>
                            <span>Event:</span>
                            <input type='text'
                                   value={title}
                                   onChange={e => setTitle(e.target.value)} />
                     </label>
                     <label>
                            <span>Date</span>
                            <input type='date'
                                   value={date}
                                   onChange={e => setDate(e.target.value)} />
                     </label>
                     <button>Add..</button>
                     <p>title : {title} - date : {date}</p>
                     <p className='reset' onClick={resetValues}>reset</p>
              </form>
       )
}
