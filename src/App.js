import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  let lastUpdateTime = new Date().getTime();
  const getNewEventsFromDB = async ()=>{
    const response = await fetch (`/api/events?since=${lastUpdateTime}`);
    const newEvents = await response.json();
    return newEvents;
  }

  const [events , setEvents] = useState([
    {title:"say st to macs" , id : 1},
    {title:"buy some apple" , id : 2},
    {title:"charge the car battery" , id : 3},
    {title:"close the citadel gates" , id : 4}
  ])

  const handleClick = (id) =>{
    setEvents((prevEvents)=>{
      const updateEvents = prevEvents.filter((event) => event.id !== id);
      const fetchNewEvents = async () =>{
        const newEvents = await getNewEventsFromDB();
        return [...updateEvents , ...newEvents];
      }
      return fetchNewEvents();
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
