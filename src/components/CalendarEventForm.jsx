import React, { useState } from 'react';

const CalendarEventForm = ({ setCalendarEvents }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      date,
      id: Date.now(),
    };
    setCalendarEvents((prevEvents) => [...prevEvents, newEvent]);
    setTitle('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default CalendarEventForm;
