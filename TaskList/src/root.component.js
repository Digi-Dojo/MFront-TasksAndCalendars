import React from 'react';
import TaskCreateForm from './fragments/TaskCreateForm';
import TaskFragment from './fragments/TaskFragment';
import useTasks from '../hooks/useTasks';

const TasksList = () => {
  const [tasks, setTasks] = useTasks();

  const handleTaskCreate = (event) => {
    event.preventDefault();

    const newTask = {
      id: tasks.length + 1,
      title: event.target.title.value,
      user: event.target.user.value,
      place: event.target.place.value,
      description: event.target.description.value,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="scrollMenu-Tasks">
      {tasks.map((task) => (
        task && <TaskFragment key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
