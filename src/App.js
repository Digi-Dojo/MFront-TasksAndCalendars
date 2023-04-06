import React from 'react';
import './App.css';
import { Title } from './components/Title';
import CalendarEventForm from './components/CalendarEventForm';
import CalendarEventList from './components/CalendarEventList';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';
import CalendarFragment from './fragments/CalendarFragment';
import TaskFragment from './fragments/TaskFragment';
import useCalendarEvents from './hooks/useCalendarEvents';
import useTasks from './hooks/useTasks';

function App() {
  // Initialize state for calendar events and tasks using custom hooks
  const [calendarEvents, setCalendarEvents] = useCalendarEvents();
  const [tasks, setTasks] = useTasks();

  return (
    <div className="App">
      <Title primary>My Calendar & Task App</Title>
      <div className="container">
        <div className="calendar">
          <Title secondary>Calendar</Title>
          <CalendarFragment calendarEvents={calendarEvents} />
          <CalendarEventForm setCalendarEvents={setCalendarEvents} />
          <CalendarEventList calendarEvents={calendarEvents} setCalendarEvents={setCalendarEvents} />
        </div>
        <div className="tasks">
          <Title secondary>Tasks</Title>
          <TaskFragment tasks={tasks} />
          <TaskForm setTasks={setTasks} />
          <TasksList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
