import './App.css';
import React, {useState} from 'react'
import Title from './components/title'
import Modal from './components/Modal'
import EventList from './components/EventList';


function App() {
// Events list and funcs:
  const [events , setEvents] = useState([
    {title:"say st to macs" , id : 1},
    {title:"buy some apple" , id : 2},
    {title:"charge the car battery" , id : 3},
    {title:"close the citadel gates" , id : 4}
  ])
  const handleClick = (id) =>{
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id !== event.id
      })
    })
    console.log(id)
  }
  const [showEvents , setShowEvents] = useState(true)
  
  //modal closing button func:
  const [showModal , setShowModal] = useState(false);
  console.log(showModal);
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

      {showModal && <Modal handleClose={handleClose}>
      <img src="./logo192.png" alt="nop" />
      <h3> who's the Enemy?</h3>
      </Modal>}
      <button onClick={() => setShowModal(true)}>show Modal</button>
    </div>
  );
}

export default App;
