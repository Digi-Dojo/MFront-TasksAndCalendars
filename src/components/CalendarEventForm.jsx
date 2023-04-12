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
    <Box
        component="form"
        sx={{
            '& .MuiInputBase-input': { color: '#ffffff' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
            '& .MuiInputLabel-outlined': { color: '#ffffff' },
            }}
    >
      <TextField
        label="Event Title"
        value={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
        sx={{ marginRight: '10px' }}
      />
      <TextField
        label="Event Description"
        value={eventDescription}
        onChange={(e) => setEventDescription(e.target.value)}
        sx={{ marginRight: '10px'}}

      />
      <TextField
        label="Event Tag"
        value={eventTag}
        onChange={(e) => setEventTag(e.target.value)}
        sx={{ marginRight: '10px', color: '#ffffff' }}


      />
      <button className="add-event-btn" type="submit" onClick={addEvent}> Add Event </button>
    </Box>
  );
};

export default CalendarEventForm;
