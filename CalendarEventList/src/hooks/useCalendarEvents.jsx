import { useState, useEffect } from 'react';

const useCalendarEvents = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  console.log("Hey");

  const fetchCalendarEvents = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/calendar-events/getAll'); 
      const fetchedCalendarEvents = await response.json();

      if (!Array.isArray(fetchedTasks)) {
        throw new Error('Fetched tasks is not an array');
      }

      console.log("CESize: " + fetchedTasks.length);
      
      setCalendarEvents(prevEvents => [...prevEvents, ...fetchedCalendarEvents]);
    } catch (error) {
      console.error('Error fetching calendar events: ', error);
    }
  };

  useEffect(() => {
    fetchCalendarEvents();
  }, []);

  return [calendarEvents, setCalendarEvents];
};

export default useCalendarEvents;
