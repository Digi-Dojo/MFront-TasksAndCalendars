import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8080/task-calendar/api/tasks/getAll'); 
      const fetchedTasks = await response.json();

      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return [tasks, setTasks];
};

export default useTasks;
