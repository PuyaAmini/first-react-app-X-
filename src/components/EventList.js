import React from 'react'

export default function EventList({events , handleClick}) {
  return (
    <div>
      {events.map((event , index) =>(
      <React.Fragment  key = {event.id}>
        <h3>{index} - {event.title}</h3>
        <button onClick={()=> handleClick(event.id)}>delete Event</button>
      </React.Fragment> ))}   
    </div>
  )
}
