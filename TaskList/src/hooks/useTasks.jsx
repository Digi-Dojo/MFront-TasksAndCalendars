import { useState, useEffect } from 'react';

export const useTasks = () => {
  const dummyTask = {
    id: 'dummy-task',
    title: 'dummy task',
    description: "I'm not real",
    user: 'Batman',
    place: 'Batcave',
    tags: 'BatStuff',
    status: 'PENDING'
  };

  const [tasks, setTasks] = useState([dummyTask]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/tasks/getAll'); 
      const fetchedTasks = await response.json();

      if (!Array.isArray(fetchedTasks)) {
        throw new Error('Fetched tasks is not an array');
      }

      setTasks(prevTasks => [...prevTasks, ...fetchedTasks]);
    } catch (error) {
      console.error('Error fetching tasks: ', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return [tasks, setTasks];
};

export default useTasks;
