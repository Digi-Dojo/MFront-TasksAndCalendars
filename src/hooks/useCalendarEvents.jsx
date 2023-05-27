import { useState, useEffect } from 'react';

const useCalendarEvents = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  const fetchCalendarEvents = async () => {
    try {
      const response = await fetch('http://localhost:8080/task-calendar/api/calendar-events/getAll');
      const fetchedCalendarEvents = await response.json();

      setCalendarEvents(fetchedCalendarEvents);
    } catch (error) {
      console.error('Error fetching calendar events:', error);
    }
  };

  useEffect(() => {
    fetchCalendarEvents();
  }, []);

  return [calendarEvents, setCalendarEvents];
};


export default useCalendarEvents;
