import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Creating a dummy task
    const dummyTask = [
      {
        title: "DUMMY TASK",
        description: "I'm not real",
        user: "Batman",
        place: "Batcave",
        tags: "BatStuff",
        status: 'TO DO' 
      }
    ];

    // Setting the dummy task in the state
    setTasks(dummyTask);
  }, []);

  const post = async ({description, place, user, status, title}) => {
    // Implement your post logic here when backend is working
  };

  const updateStatus = async ({ taskId, description, place, user, status, tags }) => {
    // Implement your update logic here when backend is working
  };

  const setStatus = (task) => {
    // Implement your setStatus logic here when backend is working
  };

  const setTask = (task) => {
    // Implement your setTask logic here when backend is working
  };

  return [tasks, setTask, setStatus];
};

export default useTasks;
