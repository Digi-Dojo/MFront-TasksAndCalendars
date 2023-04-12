import React from 'react';
import TaskCreateForm from './TaskCreateForm';
import TaskFragment from '../fragments/TaskFragment';
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
    <div>
      <div className="task-create-form">
        <TaskCreateForm
          title=""
          user=""
          place=""
          description=""
          setTitle={() => {}}
          setUser={() => {}}
          setPlace={() => {}}
          setDescription={() => {}}
          onSubmit={handleTaskCreate}
          buttonText="Create Task"
        />
      </div>
      <div className="tasks-list">
        {tasks.map((task) => (
          task && <TaskFragment key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
