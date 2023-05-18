import React from 'react';

const TaskForm = () => {
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
    </div>
  )
};

export default TaskForm;
