import React from 'react';
import TaskItem from '../fragments/TaskItem';
import useTasks from '../hooks/useTasks';

const TasksList = () => {
  const [tasks] = useTasks();

  return (
    <div className="tasks-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;