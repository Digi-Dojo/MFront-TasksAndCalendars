import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/tasks'); 
      const fetchedTasks = await response.json();

      const dummyTask = {
        title: 'DUMMY TASK',
        description: "I'm not real",
        user: 'Batman',
        place: 'Batcave',
        tags: 'BatStuff',
        status: 'INCOMPLETE'
      };

      setTasks([...fetchedTasks, dummyTask]);
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
