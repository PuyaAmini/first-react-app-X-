import './App.css';
import React, {useState} from 'react'
import Title from './components/title'
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';


function App() {
// Events funcs:
const [events , setEvents] = useState([]) //used by <EventList/>
  // add event : exported from <NewEventForm/> to NewEventForm.js
  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents , event]
    })
    setShowModal(false)
  }
    //delete event
  const handleClick = (id) =>{
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id !== event.id
      })
    })
  }

  const [showEvents , setShowEvents] = useState(true)
  
  //modal closing button func:
  const [showModal , setShowModal] = useState(false);
  const handleClose = () =>{
    setShowModal(false)
  }


  const subtitle = 'All the latest events in mario kingdom'

  return (
    <div className="App">

      <Title title = "Mario kingdom Events"  subtitle={subtitle}/>

      {showEvents && (<React.Fragment>
        <button onClick={()=>{setShowEvents(false)}}> Hide Contents</button>
      </React.Fragment>)}
      {!showEvents && (<React.Fragment>
        <button onClick={() => {setShowEvents(true)}}> Show Contents</button>
      </React.Fragment>)}
    {showEvents && <EventList events={events} handleClick={handleClick}/>}
    <br/>    
      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}

      {showModal && <Modal handleClose={handleClose} isSalesModel={true}>
      <NewEventForm addEvent={addEvent}/>
      </Modal>}
      <button onClick={() => setShowModal(true)}>show Modal</button>
    </div>
  );
}

export default App;
