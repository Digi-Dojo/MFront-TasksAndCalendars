import React, { useState } from 'react';
import dayjs from 'dayjs';
import './App.css';
import { Title } from './components/Title';
import CalendarEventList from './fragments/CalendarEventList';
import TasksList from './fragments/TasksList';
import Calendar from './fragments/Calendar';
import useCalendarEvents from './hooks/useCalendarEvents';
import { useTasks } from './hooks/useTasks';
import TaskCreateForm from './fragments/TaskCreateForm';
import CalendarEventForm from './fragments/CalendarEventForm';

function App() {
  const [calendarEvents, setCalendarEvent, calendarEventsError] = useCalendarEvents();
  const [tasks, setTask, taskError] = useTasks();
  const [selectedStartDate, setSelectedStartDate] = useState(dayjs().toDate());
  const [selectedEndDate, setSelectedEndDate] = useState(dayjs().toDate());

  return (
    <div className="App">
      {calendarEventsError && <div>Error: {calendarEventsError.message}</div>}
      {taskError && <div>Error: {taskError.message}</div>}
      <Title primary>My Calendar & Task App</Title>
      <div className="container">
        <div className="calendar">
          <Title secondary>Calendar</Title>
          <Calendar calendarEvents={calendarEvents} setSelectedStartDate={setSelectedStartDate} setSelectedEndDate={setSelectedEndDate} />
          <CalendarEventForm setCalendarEvent={setCalendarEvent} startDate={selectedStartDate} endDate={selectedEndDate} />
          <CalendarEventList calendarEvents={calendarEvents} />
        </div>
        <div className="tasks">
          <Title secondary>Tasks</Title>
          <TaskCreateForm setTasks={setTask} />
          <TasksList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;