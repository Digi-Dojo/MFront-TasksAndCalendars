import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const CalendarEventForm = ({ setCalendarEvents, startDate, endDate }) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventTag, setEventTag] = useState('');

  const addEvent = () => {
    if (eventTitle.trim() !== '' && eventDescription.trim() !== '') {
      setCalendarEvents((prevEvents) => [
        ...prevEvents,
        {
          title: eventTitle,
          description: eventDescription,
          startDate: startDate,
          endDate: endDate,
          tag: eventTag,
        },
      ]);
      setEventTitle('');
      setEventDescription('');
      setEventTag('');
    }
  };

  return (
    <Box>
      <TextField
        label="Event Title"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <TextField
        label="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
      />
      <TextField
        label="Event Tag"
        value={eventTag}
        onChange={(e) => setEventTag(e.target.value)}
      />
      <button className="add-event-btn" type="submit" onClick={addEvent}> Add Event </button>
    </Box>
  );
};

export default CalendarEventForm;
