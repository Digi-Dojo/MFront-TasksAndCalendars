import useTasks from '../hooks/useTasks';
import React, { useState } from 'react';
import { Box } from '@mui/material';

const TasksList = () => {

  const [completed, setCompleted] = useState(false);
  const [tasks] = useTasks([]);


  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  const maxHeight = {
    height: '75vh',
    overflow: 'auto',
  };
  // const handleTaskCreate = (event) => {
  //   event.preventDefault();

  //   const newTask = {
  //     id: tasks.length + 1,
  //     title: event.target.title.value,
  //     user: event.target.user.value,
  //     place: event.target.place.value,
  //     description: event.target.description.value,
  //   };

  //   tasks((prevTasks) => [...prevTasks, newTask]);
  // };

  return (
    <div>
      <Box sx={maxHeight}>
        <h2>Tasks</h2>
        {tasks.map((task, index) => (
          <div key={index}>
            <h3>{task.title}</h3>
            <p>Description: {task.description}</p>
            <p>User: {task.user}</p>
            <p>Place: {task.place}</p>
            <br></br><br></br>
          </div>
        ))}
      </Box>
    </div >
  );
};

export default TasksList;
