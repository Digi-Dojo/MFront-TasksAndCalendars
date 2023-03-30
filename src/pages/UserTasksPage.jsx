
import React from 'react';
import Title from '../components/Title';
import TasksList from '../components/TasksList';

const UserTasksPage = () => {
  return (
    <div className="user-tasks-page">
      <Title text="User Tasks" />
      <TasksList />
    </div>
  );
};


export default UserTasksPage;
