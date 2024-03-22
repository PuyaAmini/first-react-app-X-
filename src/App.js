import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

// تنظیمات Firebase را در اینجا قرار دهید

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // گوش دادن به تغییرات در پایگاه داده Firebase
    const eventsRef = firebase.database().ref('events');
    eventsRef.on('value', (snapshot) => {
      const eventsData = snapshot.val() || {};
      const newEvents = Object.values(eventsData);
      setEvents(newEvents);
    });

    // تمیز کردن گوش دادن به تغییرات در هنگام unmount شدن کامپوننت
    return () => eventsRef.off();
  }, []);

  const handleClick = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
  };

  return (
    <div className="App">
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <button onClick={() => handleClick(event.id)}>حذف رویداد</button>
        </div>
      ))}
    </div>
  );
}

export default App;