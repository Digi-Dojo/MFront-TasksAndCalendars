import React, { useState } from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import { Title } from '../components/Title';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CalendarEventForm from '../components/CalendarEventForm';

export const CalendarFragment = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(dayjs().toDate());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs().toDate());
  const [events, setEvents] = useState([]);

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  const maxHeight = {
    height: '75vh',
    overflow: 'auto',
  };

  return (
    <div>
      <h3>Select Start and End Dates</h3>
      <Calendar
        selectRange={true}
        onChange={(dateRange) => {
          handleStartDateChange(dateRange[0]);
          handleEndDateChange(dateRange[1]);
        }}
        value={[selectedStartDate, selectedEndDate]}
      />
      <CalendarEventForm
        setCalendarEvents={setEvents}
        startDate={selectedStartDate}
        endDate={selectedEndDate}
      />
      <Box sx={maxHeight}>
        <h2>Events</h2>
        {events.map((event, index) => (
          <div key={index}>
            <h3>{event.title}</h3>
            <p>Description: {event.description}</p>
            <p>Start Date: {dayjs(event.startDate).format('MMMM D, YYYY')}</p>
            <p>End Date: {dayjs(event.endDate).format('MMMM D, YYYY')}</p>
            <p>Tag: {event.tag}</p>
          </div>
        ))}
    </Box>
    </div>
);
};

export default CalendarFragment;
          