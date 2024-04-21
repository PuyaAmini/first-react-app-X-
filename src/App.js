import './App.css';
import React, { useState } from 'react'
import Title from './components/title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';


function App() {
  //stat hook for managing events
  const [events, setEvents] = useState([
    { title: 'set question A', id: 0 },
    { title: 'set question B', id: 1 },
    { title: 'set question C', id: 2 },
    { title: 'set question D', id: 3 },
  ])

  // rendering the list of events with delete button
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  const subtitle = 'All the latest Events in Mario Kingdom'

  const [showEvents, setShowEvents] = useState(true)

  // modal closing button func
  const [showModal, setShowModal] = useState(true)
  const handleClose = () => setShowModal(false)

  return (
    <div className="App">

      <Title title="Mario Kingdom Events"
        subtitle={subtitle} />

      {/* show Hide buttons */}
      {showEvents && <button onClick={() => setShowEvents(false)}>Hide</button>}
      {!showEvents && <button onClick={() => setShowEvents(true)}>Show</button>}

      {/* Events list */}
      {showEvents && <EventList
        events={events} handleClick={handleClick} />}


      {showModal && <Modal
        handleClose={handleClose}
        isSalesModel={true}>
        <NewEventForm />
      </Modal>}

    </div>
  );
}

export default App;
