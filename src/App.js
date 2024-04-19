import './App.css';
import React, { useState } from 'react'
import Title from './components/title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';


function App() {
  //stat hook for managing events
  const [events, setEvents] = useState([
    { title: 'set question 1', id: 0 },
    { title: 'set question 2', id: 1 },
    { title: 'set question 3', id: 2 },
    { title: 'set question 4', id: 3 },
  ])

  // rendering the list of events with delete button
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id != event.id
      })
    })
  }

  const [showEvents, setShowEvents] = useState(true)
  return (
    <div className="App">
      {/* show Hide buttons */}
      {showEvents && <button onClick={() => setShowEvents(false)}>True</button>}
      {!showEvents && <button onClick={() => setShowEvents(true)}>Show</button>}

      {/* Events list */}
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h3>{index + 1} - {event.title}</h3>
          <button onClick={() => handleClick(event.id)}> Delete </button>
        </div>
      ))}

    </div>
  );
}

export default App;
