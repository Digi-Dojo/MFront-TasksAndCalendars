import React from 'react';
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
  // Initialize state for calendar events and tasks using custom hooks
  const [calendarEvents, setCalendarEvents] = useCalendarEvents();
  const [tasks, setTaskList] = useTasks();

  return (
    <div className="App">
      <Title primary>My Calendar & Task App</Title>
      <div className="container">
        <div className="calendar">
          <Title secondary>Calendar</Title>
          <Calendar calendarEvents={calendarEvents} />
          <CalendarEventForm setEvents={setCalendarEvents}></CalendarEventForm>
          <CalendarEventList calendarEvents={calendarEvents} setCalendarEvents={setCalendarEvents} />
        </div>
        <div className="tasks">
          <Title secondary>Tasks</Title>
          <TaskCreateForm setTasks={setTaskList}/>
          <TasksList tasks={tasks} setTasks={setTaskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
