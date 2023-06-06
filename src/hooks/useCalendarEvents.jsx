import { useState, useEffect } from 'react';
import { client as axios } from '../utils/axios'

const useCalendarEvents = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [error, setError] = useState(null);

  async function post({ description, startDate, endDate, place, user, tags, title }) {
    try {
      const response = await axios.post('api/calendar-events/create', {
        description: description,
        startDate: startDate,
        endDate: endDate,
        place: place,
        user: user,
        tags: tags,
        title: title
      });

      // Refresh calendar events after successful post
      getCalendarEvents();
      return response.data;
    } catch (err) {
      // Handle error
      console.error(err);
      setError(err);
    }
  }

  function setCalendarEvent(calendarEvent) {
    return post(calendarEvent);
  }

  async function get() {
    try {
      const { data } = await axios.get('/api/calendar-events/getAll');
      setCalendarEvents(data);
    } catch (err) {
      // Handle error
      console.error(err);
      setError(err);
    }
  }

  function getCalendarEvents() {
    get();
  }

  useEffect(getCalendarEvents, []);

  // Return error as well to be used in component
  return [calendarEvents, setCalendarEvent, error];
};

export default useCalendarEvents;
