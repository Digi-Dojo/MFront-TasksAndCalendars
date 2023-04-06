import React, { useState } from 'react';

const TaskFragment = ({ task }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <div key={task.id} className="task-item">
      <h3>{task.title}</h3>
      <p>User: {task.user}</p>
      <p>Place: {task.place}</p>
      <button onClick={toggleCompleted}>
        {completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>
  );
};

export default TaskFragment;

