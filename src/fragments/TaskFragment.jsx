import React, { useState } from 'react';
import { TextField } from '@mui/material';

export const TaskFragment = ({ task }) => {
  const [completed, setCompleted] = useState(false);
  const [description, setDescription] = useState(task.description);
  const toggleCompleted = () => {
    setCompleted(!completed);
  };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
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
        <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            multiline
            rows={4}
        />

    </div>
  );
};

export default TaskFragment;


