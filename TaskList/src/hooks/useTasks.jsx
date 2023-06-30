import { useState, useEffect } from 'react';

export const useTasks = () => {
  const dummyTask = {
    id: 'dummy-task',
    title: 'dummyyy task',
    description: "I'm not real",
    user: 'Batman',
    place: 'Batcave',
    tags: 'BatStuff',
    status: 'PENDING'
  };

  console.log("useTasks class");

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8100/api/tasks/getAll'); 
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
