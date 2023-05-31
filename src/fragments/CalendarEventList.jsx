import React from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import 'react-calendar/dist/Calendar.css';

const CalendarEventList = ({calendarEvents}) => {

  const maxHeight = {
    height: '75vh',
    overflow: 'auto',
  };

  var calendarEventsList = <br></br>;
  if(calendarEvents.length > 0){
    calendarEventsList = calendarEvents.map((event, index) => (
      <div className="scrollMenu-Events" key={index}>
        <h3>{event.title}</h3>
        <p>Description: {event.description}</p>
        <p>Start Date: {dayjs(event.startDate).format('MMMM D, YYYY')}</p>
        <p>End Date: {dayjs(event.endDate).format('MMMM D, YYYY')}</p>
        <p>Tag: {event.tag}</p>
        <br></br><br></br>
      </div>
  ))}

  return (
    <div>
      <Box sx={maxHeight}>
        <h2>Events:</h2>
        {calendarEventsList}
      </Box>
    </div>
  );
};

export default CalendarEventList;
