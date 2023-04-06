import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Box } from "@mui/system";
import { Title } from "../components/Title";
import useTasks from "../hooks/useTasks";
import 'react-calendar/dist/Calendar.css';

export const CalendarFragment = () => {
  const tasks = useTasks();
  const [value, onChange] = useState(new Date());

  const maxHeight = {
    height: '75vh',
    overflow: 'auto'
  };

  return (
    <div>
      <Title secondary>Calendar</Title>
      <Calendar onChange={onChange} value={value} />
      <Box sx={maxHeight}>
        {tasks.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>User: {task.user}</p>
            <p>Place: {task.place}</p>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default CalendarFragment;
