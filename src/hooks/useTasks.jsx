import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/tasks/getAll'); 
      const fetchedTasks = await response.json();

      console.log("Tasks: " + JSON.stringify(fetchedTasks));

      setTasks(fetchedTasks);

    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(fetchTasks, []);

  return [tasks, setTasks];
};

export default useTasks;