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
    <div key={task.id} className="task-item">
      <h3>{task.title}</h3>
      <p>User: {task.user}</p>
      <p>Place: {task.place}</p>
        <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            multiline
            rows={4}
        />
      <button className="btn complete-btn" onClick={toggleCompleted} name={completed ? 'Mark Incomplete' : 'Mark Complete'}>
          <i className="gg-check"></i>
      </button>
    </div>
  );
};

export default TaskFragment;


