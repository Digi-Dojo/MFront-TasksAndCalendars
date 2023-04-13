import { useState, useEffect } from 'react';

const useCalendarEvents = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  // Fetch calendar events from your API or any other source
  const fetchCalendarEvents = async () => {
    // Replace this with your actual API call
    const fetchedCalendarEvents = [
      { id: 1, title: 'Event 1', startDate: '2023-04-06', endDate: '2023-04-16', description: "Trip to Milan", tag:"Bring documents"},
      { id: 2, title: 'Event 2', startDate: '2023-04-07', endDate: '2023-04-08', description: "Business meeting" },
    ];
    setCalendarEvents(fetchedCalendarEvents);
  };

  useEffect(() => {
    fetchCalendarEvents();
  }, []);

  return [calendarEvents, setCalendarEvents];
};

export default useCalendarEvents;
