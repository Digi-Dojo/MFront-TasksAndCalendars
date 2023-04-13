import React from 'react';
import useCalendarEvents from '../hooks/useCalendarEvents';

const CalendarEventList = () => {
  const calendarEvents = useCalendarEvents();
  return (
       <div className="scrollMenu-Events">
      {calendarEvents.map(calendarEvent => (
          <calendarEventListItem class="calendarEventListItem" key={calendarEvent.id}>{calendarEvent.title} <p></p> 
                {calendarEvent.startDate} - {calendarEvent.endDate} <p></p> {calendarEvent.description}
          </calendarEventListItem>
      ))}
    </div>
  );
};

export default CalendarEventList;
