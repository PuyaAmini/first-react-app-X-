در صورتی که از Firebase برای ذخیره سازی رویدادها استفاده می کنید، می توانید از قابلیت گوش دادن به تغییرات در پایگاه داده استفاده کنید تا رویدادهای جدید را به صورت لحظه ای دریافت کنید. در اینجا یک مثال از کد برای این منظور ارائه می شود:

```jsx
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
```

در این کد، ابتدا باید تنظیمات Firebase را انجام دهید. سپس در تابع `useEffect`، یک گوش دهنده (listener) برای گره `events` در پایگاه داده Firebase ایجاد می کنیم. این گوش دهنده هر بار که تغییری در گره `events` رخ دهد، فراخوانی می شود و داده های جدید را دریافت می کند.

داده های دریافت شده از Firebase در `eventsData` قرار می گیرند. سپس با استفاده از `Object.values`، یک آرایه از رویدادها ایجاد می کنیم و آن را به `setEvents` ارسال می کنیم تا state به روز شود.

در تابع `handleClick`، رویداد مورد نظر را از لیست رویدادها حذف می کنیم. هنگامی که کاربر روی دکمه "حذف رویداد" کلیک می کند، این تابع فراخوانی می شود و رویداد مربوطه از لیست حذف می شود.

با این روش، هر بار که تغییری در گره `events` در پایگاه داده Firebase رخ دهد (مانند اضافه شدن یک رویداد جدید توسط کاربر دیگر)، گوش دهنده فعال می شود و لیست رویدادها در state به روز می شود. همچنین، هنگامی که کامپوننت unmount می شود (مثلاً در صورت انتقال به صفحه دیگر)، گوش دادن به تغییرات متوقف می شود تا از اتلاف منابع جلوگیری شود.

توجه داشته باشید که این کد فرض می کند که شما از نسخه 9 یا بالاتر Firebase استفاده می کنید و تنظیمات Firebase را به درستی انجام داده اید. همچنین لازم است که مدول `firebase/database` را نیز نصب کرده باشید.

بله، این کد از رویکرد تغییر غیرمخرب (Immutable) استفاده می‌کند و رویدادهای جدید را در هنگام حذف یک رویداد از دست نمی‌دهد. دلیل این امر استفاده از متد `filter` در تابع `handleClick` است:

```jsx
const handleClick = (id) => {
  setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
};
```

در این قسمت از کد، ما یک کپی از آرایه `prevEvents` (لیست قبلی رویدادها) را ایجاد می‌کنیم و سپس با استفاده از متد `filter`، رویدادی را که شناسه آن با `id` ارسال شده مطابقت دارد، حذف می‌کنیم. این عملیات روی کپی از آرایه انجام می‌شود و آرایه اصلی تغییر نمی‌کند.

همچنین، در قسمت کد زیر، ما از `useEffect` برای گوش دادن به تغییرات در پایگاه داده Firebase استفاده می‌کنیم:

```jsx
useEffect(() => {
  const eventsRef = firebase.database().ref('events');
  eventsRef.on('value', (snapshot) => {
    const eventsData = snapshot.val() || {};
    const newEvents = Object.values(eventsData);
    setEvents(newEvents);
  });

  return () => eventsRef.off();
}, []);
```

در این قسمت، هر بار که تغییری در گره `events` پایگاه داده Firebase رخ دهد (مانند اضافه شدن یک رویداد جدید توسط کاربر دیگر)، تابع callback در `eventsRef.on('value', ...)` فراخوانی می‌شود و لیست جدید رویدادها را از Firebase دریافت می‌کند. سپس، این لیست جدید به `setEvents` ارسال می‌شود و state به روز می‌شود.

بنابراین، هنگامی که کاربر روی دکمه "حذف رویداد" کلیک می‌کند و `handleClick` فراخوانی می‌شود، رویداد مورد نظر از کپی لیست حذف می‌شود، اما لیست اصلی که از Firebase دریافت شده است، تغییر نمی‌کند. در نتیجه، اگر در همین زمان، کاربر دیگری رویداد جدیدی را به Firebase اضافه کند، این رویداد جدید در لیست اصلی وجود خواهد داشت و در بروزرسانی بعدی state، به لیست جدید اضافه خواهد شد.

به این ترتیب، این کد از رویکرد تغییر غیرمخرب پیروی می‌کند و اطمینان حاصل می‌شود که هیچ رویداد جدیدی در حین حذف یک رویداد از دست نمی‌رود.