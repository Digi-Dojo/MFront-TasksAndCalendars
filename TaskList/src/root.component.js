import React, { useState } from 'react';
import { Box } from '@mui/material';

const TasksList = ({ tasks }) => {
  // Dummy task
  const dummyTask = {
    title: 'DUMMY TASK',
    description: "I'm not real",
    user: 'Batman',
    place: 'Batcave',
    tags: 'BatStuff',
    status: 1
  };

  tasks = [dummyTask, ...tasks]; // prepend the dummy task to the tasks list

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

  var taskList = <br></br>;
  if(tasks.length > 0){
    taskList = tasks.map((task, index) => (
    <div key={index}>
      <h3 style={{ textDecoration: completedTasks.includes(index) ? "line-through" : "" }}>{task.title}</h3>
      <p>Description: {task.description}</p>
      <p>{task.user === null ? '' : 'User: ' + task.user}</p>
      <p>{task.place === null ? '' : 'Place: ' + task.place}</p>
      <p>{task.tags === null ? '' : 'tags: ' + task.tags}</p>
      <div class="col-12 h-5 w-20 blue"></div>
      <button onClick={() => toggleCompleted(index)}>{task.status === 'DONE' ? 'Mark as Incomplete' : 'Mark as Complete'}</button>
      <br></br><br></br>
    </div>
  ))}

  return (
    <div>
      <Box sx={maxHeight}>
        <h2>Tasks</h2>
        {taskList}
      </Box>
    </div >
  );
};

export default TasksList;
