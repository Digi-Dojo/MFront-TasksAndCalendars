import useTasks from '../hooks/useTasks';
import React from 'react';
import { Box } from '@mui/material';

const TasksList = () => {

  const [tasks, setTasks] = useTasks([]);

  const toggleCompleted = (index) => {
    const newTasks = [...tasks]; // Clone the current state
    newTasks[index].completed = !newTasks[index].completed; // Toggle the 'completed' property of the task
    setTasks(newTasks); // Update the state
  };

  const maxHeight = {
    height: '75vh',
    overflow: 'auto',
  };

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
            <input
              type="checkbox"
              checked={task.completed || false}
              onChange={() => toggleCompleted(index)}
            />
            <br/><br/>
          </div>
        ))}
      </Box>
    </div >
  );
};

export default TasksList;
