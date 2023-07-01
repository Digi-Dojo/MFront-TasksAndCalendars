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

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8100/api/tasks/getAll'); 
      const fetchedTasks = await response.json();

      if (!Array.isArray(fetchedTasks)) {
        throw new Error('Fetched tasks is not an array');
      }

      // setTasks(prevTasks => [...prevTasks, ...fetchedTasks]);
      setTasks(fetchedTasks);

    } catch (error) {
      console.error('Error fetching tasks: ', error);
    }
  };

  const createTask = async (formData) => {

    console.log("Creating: " + JSON.stringify(formData));

    try {
      // const response = await fetch('http://127.0.0.1:8100/api/tasks/create', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      };

      const response = await fetch('http://127.0.0.1:8100/api/tasks/create', requestOptions);

      console.log("res: " + response.status);
      const responseBody = await response.json();
      console.log(responseBody);

      if (response.ok) {
        // Task creation successful, fetch updated tasks
        fetchTasks();
      } else {
        throw new Error('Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task: ', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return [tasks, setTasks, createTask];
};

export default useTasks;
