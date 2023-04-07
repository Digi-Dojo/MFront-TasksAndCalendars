import React from 'react';
import TaskFragment from '../fragments/TaskFragment';
import useTasks from '../hooks/useTasks';

const TasksList = () => {
  const [tasks] = useTasks();

  return (
    <div className="tasks-list">
      {tasks.map(task => (
        task && <TaskFragment key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;