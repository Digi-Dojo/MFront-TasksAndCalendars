import React, { useState } from 'react';
import { Box } from '@mui/material';

const TasksList = ({ tasks }) => {

  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleCompleted = (taskId) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter(task => task !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
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
            <h3 style={{ textDecoration: completedTasks.includes(index) ? "line-through" : "" }}>{task.title}</h3>
            <p>Description: {task.description}</p>
            <p>User: {task.user}</p>
            <p>Place: {task.place}</p>
            <button onClick={() => toggleCompleted(index)}>{completedTasks.includes(index) ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
            <br></br><br></br>
          </div>
        ))}
      </Box>
    </div >
  );
};

export default TasksList;
