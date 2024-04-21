import React, { useState } from 'react'
import "./NewEventForm.css"
export default function NewEventForm({ addEvents }) {
       const [title, setTitle] = useState('')
       const [date, setDate] = useState('')
       const [location, setLocation] = useState('MARS')

       const resetValues = () => {
              setDate('');
              setTitle('');
              setLocation('MARS')
       }
       const handleSubmit = (e) => {

              e.preventDefault()
              const event = {
                     title: title,
                     date: date,
                     location: location,
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
                     <label>
                            <span>location: </span>
                            <select
                                   onChange={e => setLocation(e.target.value)}>
                                   <option value={'Tehran'}>Tehran</option>
                                   <option value={'london'}>"London"</option>
                                   <option value={'washington'}>"Washington"</option>
                                   <option value={'moscow'}>"Moscow"</option>
                                   <option value={'tokyo'}>"Tokyo"</option>
                                   <option value={'beijing'}>"Beijing"</option>

                            </select>
                     </label>
              </form>
       )
}
