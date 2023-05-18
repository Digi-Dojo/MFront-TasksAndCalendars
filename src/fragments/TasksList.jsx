import React from 'react';
import useTasks from '../hooks/useTasks';

const TasksList = () => {
  const tasks = useTasks();

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
    <div className="scrollMenu-Tasks">
      {tasks.map(task => (
        <li key={task.id} className='TaskListItem'>{task.title}<p></p>
            {task.user} - {task.place} <p></p> {task.description}
        </li>
      ))}
    </div>
  );
};

export default TasksList;
