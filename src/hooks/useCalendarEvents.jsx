import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

const useCalendarEvents = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  async function post({description, startDate, endDate, place, user, tags, title}) {

    return axios.post('api/calendar-events/create', {
            description: description,
            startDate: startDate,
            endDate: endDate,
            place: place,
            user: user,
            tags: tags,
            title: title
        })
        .then(message =>{
          getCalendarEvents();
          return message
        } )
  }

  function setCalendarEvent(calendarEvent) {
    return post(calendarEvent);
  }

  async function get() {
    const { data } = await axios.get('/api/calendar-events/getAll');
    setCalendarEvents(data);
  }

  function getCalendarEvents() {
    get();
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

  useEffect(getCalendarEvents, []);

  return [calendarEvents, setCalendarEvent];
};

export default useCalendarEvents;