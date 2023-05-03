import { useState, useEffect } from 'react';

const useCalendarEvents = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  // Fetch calendar events from your API or any other source
  const fetchCalendarEvents = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5432//postgres');
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
