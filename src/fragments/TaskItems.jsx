import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>User: {task.user}</p>
      <p>Place: {task.place}</p>
    </div>
  );
};

export default TaskItem;