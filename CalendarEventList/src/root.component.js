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
        <p>{event.tag === undefined ? '' : 'Tag: ' + event.tag}</p>
        <p>{event.user === null ? '' : 'User: ' + event.user}</p>
        <p>{event.place === null ? '' : 'Place: ' + event.place}</p>
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
