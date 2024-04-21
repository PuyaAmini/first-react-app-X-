import React, { useState } from 'react'
import "./NewEventForm.css"
export default function NewEventForm({ addEvents }) {
       const [title, setTitle] = useState('')
       const [date, setDate] = useState('')
       const resetValues = () => {
              setDate('');
              setTitle('');
       }
       const handleSubmit = (e) => {

              e.preventDefault()
              const event = {
                     title: title,
                     date: date,
                     id: Math.random() * 10000
              }

              addEvents(event)
              resetValues()
       }
       return (
              <form className='new-event-form'
                     onSubmit={handleSubmit}>
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
              </form>
       )
}
