import React, { useState } from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';
import useCalendarEvents from '../hooks/useCalendarEvents';
/*
This class should display the list ov events and add the new ones when an entry in the CalendarEventForm gets submitted
PROBLEM: The new events do not get displayed when added.
*/
const CalendarEventList = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(dayjs().toDate());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs().toDate());
  const calendarEvents = useCalendarEvents([]);

  const maxHeight = {
    height: '75vh',
    overflow: 'auto',
  };

  return (
<div>
{/* <CalendarEventForm
    setCalendarEvents={setEvents}
    startDate={selectedStartDate}
    endDate={selectedEndDate}
    /> */}
      <Box sx={maxHeight}>
      <h2>Events</h2>
      {calendarEvents.map((event, index) => (
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
