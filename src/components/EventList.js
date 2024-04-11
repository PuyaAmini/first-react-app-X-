import styles from './EventList.module.css'

export default function EventList({events , handleClick}) {
  return (
    <div>
      {events.map((event , index) =>(
      <div className={styles.card}  key = {event.id}>
        <h3>{index} - {event.title}</h3>
        <p>{event.location} - {event.date}</p>
        <button onClick={()=> handleClick(event.id)}>delete Event</button>
      </div> ))}   
    </div>
  )
}
