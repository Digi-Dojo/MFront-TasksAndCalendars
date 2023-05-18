import useCalendarEvents from '../hooks/useCalendarEvents';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import CalendarEventForm from './CalendarEventForm';

const CalendarEventList = () => {
  const calendarEvents = useCalendarEvents();

  const [selectedStartDate, setSelectedStartDate] = useState(dayjs().toDate());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs().toDate());
  const [events, setEvents] = useState([]);



  const maxHeight = {
    height: '75vh',
    overflow: 'auto',
  };

  return (
<div>
      <CalendarEventForm
      setCalendarEvents={setEvents}
      startDate={selectedStartDate}
      endDate={selectedEndDate}
      />
      <Box sx={maxHeight}>
      <h2>Events</h2>
      {events.map((event, index) => (
          <div className="scrollMenu-Events" key={index}>
          <h3>{event.title}</h3>
          <p>Description: {event.description}</p>
          <p>Start Date: {dayjs(event.startDate).format('MMMM D, YYYY')}</p>
          <p>End Date: {dayjs(event.endDate).format('MMMM D, YYYY')}</p>
          <p>Tag: {event.tag}</p>
          <br></br><br></br>
          </div>
      ))}
      </Box>
</div>
  );
};

export default CalendarEventList;
