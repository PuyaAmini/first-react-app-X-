import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


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

  return (
    <div className="App">
    {events.map((event , index) =>(
      <div  key = {event.id}>
        <h3>{index} - {event.title}</h3>
        <button onClick={()=> handleClick(event.id)}>delete Event</button>
      </div>
      
    ))}


      
    </div>

  );
}

export default App;
