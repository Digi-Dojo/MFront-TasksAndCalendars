import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

const useCalendarEvents = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  async function post({description, startDate, endDate, place, user, tags}) {

    return axios.post('api/calendar-events/create', {
            description: description,
            startDate: startDate,
            endDate: endDate,
            place: place,
            user: user,
            tags: tags
        })
        .then(message =>{
          getCalendarEvents();
          return message
        } )
  }

  function setCalendarEvent(calendarEvent) {
    return post(calendarEvent);
  }

  // const fetchCalendarEvents = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/calendar-events/getAll");
  //     const fetchedCalendarEvents = await response.json();

  //     console.log("Events: " + JSON.stringify(fetchedCalendarEvents));
      
  //     setCalendarEvents(fetchedCalendarEvents);

  //   } catch (error) {
  //     console.error('Error fetching calendar events:', error);
  //   }
  // };

  async function get() {
    const { data } = await axios.get('api/calendar-events/getAll');
    setCalendarEvents(data);
  }

  function getCalendarEvents() {
    get();
  }

  useEffect(getCalendarEvents, []);

  return [calendarEvents, setCalendarEvent];
};

export default useCalendarEvents;