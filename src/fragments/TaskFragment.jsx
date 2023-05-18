import React, { useState } from 'react';
import TaskCreateForm from './TaskCreateForm';
import { Box } from '@mui/material';

export const TaskFragment = ({task}) => {
  const [completed, setCompleted] = useState(false);
  const [tasks, setTaskList] = useState([]);
  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  const maxHeight = {
    height: '75vh',
    overflow: 'auto',
  };

  return (null
    // <div key={task.id} className={"task-item"+(completed ? ' complete' : '')}>
    //   <div className="card-header">
    //     <button className={'btn complete-btn ' + (completed ? 'complete' : 'incomplete')} onClick={toggleCompleted}
    //             title={completed ? 'Mark Incomplete' : 'Mark Complete'}>
    //         <i className="gg-check"></i>
    //     </button>
    //     <h3 className="card-title-task">{task.title}</h3>
    //   </div>
    //     {(task.user) ? <p>User: {task.user}</p> : ""}
    //     {(task.place) ? <p>Place: {task.place}</p> : ""}
    //     <p className="item-description">Description: {task.description}</p>

  );
};

export default TaskFragment;


