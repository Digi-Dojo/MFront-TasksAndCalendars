import React from 'react';
import useCalendarEvents from '../hooks/useCalendarEvents';

const CalendarEventList = () => {
  const calendarEvents = useCalendarEvents();
  return (
       <div className="scrollMenu-Events">
      {calendarEvents.map(calendarEvent => (
          <li key={calendarEvent.id} className="CalendarEventListItem" >{calendarEvent.title} <p></p> 
                {calendarEvent.startDate} - {calendarEvent.endDate} <p></p> {calendarEvent.description}
          </li>
      ))}
    </div>
  );
};

export default CalendarEventList;
