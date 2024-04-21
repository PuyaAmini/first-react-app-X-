import styles from './EventList.module.css' //dynamic style

export default function EventList({events , handleClick}) {
  return (
    <div>
       {events.map((event , index)=>(
              <div key={event.id} 
              className={styles.card}>
                     <h3>{index} - {event.title}</h3>
                     <button 
                     onClick={() => handleClick(event.id)}>
                            Delete
                     </button>
              </div>
       ))}
    </div>
  )
}
