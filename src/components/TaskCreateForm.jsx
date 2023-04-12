import React from 'react';

const TaskCreateForm = ({
  title,
  user,
  place,
  description,
  setTitle,
  setUser,
  setPlace,
  setDescription,
  onSubmit,
  buttonText = 'Submit',
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        id="taskInput"
        type="text"
        placeholder="Insert Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p></p>
      <input
        id="taskInput"
        type="text"
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <br></br>
      <input
        id="taskInput"
        type="text"
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <br></br>
      <input
        id="taskInput"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <p></p>
      <button className="addTaskButton" type="submit">
        {buttonText}
      </button>
    </form>
  );
};

export default TaskCreateForm;