import React, { useState } from 'react';

export const TaskFragment = ({ task }) => {
  const [completed, setCompleted] = useState(false);  
  const toggleCompleted = () => {
    setCompleted(!completed);
  };


  return (
    <div key={task.id} className={"task-item"+(completed ? ' complete' : '')}>
      <div className="card-header">
        <button className={'btn complete-btn ' + (completed ? 'complete' : 'incomplete')} onClick={toggleCompleted}
                title={completed ? 'Mark Incomplete' : 'Mark Complete'}>
            <i className="gg-check"></i>
        </button>
        <h3 className="card-title">{task.title}</h3>
      </div>
      <p>User: {task.user}</p>
      <p>Place: {task.place}</p>
      <p>Description: {task.description}</p>
    </div>
  );
};

export default TaskFragment;


