import './App.css';
import React, {useState} from 'react'
import Title from './components/title'
function App() {

  const [events , setEvents] = useState([
    {title:"say st to macs" , id : 1},
    {title:"buy some apple" , id : 2},
    {title:"charge the car battery" , id : 3},
    {title:"close the citadel gates" , id : 4}
  ])

  const handleClick = (id) =>{
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id != event.id
      })
    })
    console.log(id)
    }
    const [showEvents , setShowEvents] = useState(true)

  const subtitle = 'All the latest events in mario kingdom'

  return (
    <div className="App">
      <Title title = "Mario kingdom Events"  subtitle={subtitle}/>
      <Title title = "luigi santa lvov"  subtitle="He's not a friend"/>

      {showEvents && (<React.Fragment>
        <button onClick={()=>{setShowEvents(false)}}> Hide Contents</button>
      </React.Fragment>)}
      {!showEvents && (<React.Fragment>
        <button onClick={() => {setShowEvents(true)}}> Show Contents</button>
      </React.Fragment>)}
    {showEvents && events.map((event , index) =>(
      <React.Fragment  key = {event.id}>
        <h3>{index} - {event.title}</h3>
        <button onClick={()=> handleClick(event.id)}>delete Event</button>
      </React.Fragment>    
    ))}    
    </div>
  );
}

export default App;
