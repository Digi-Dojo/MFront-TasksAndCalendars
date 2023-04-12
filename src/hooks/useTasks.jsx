import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from your API or any other source
  const fetchTasks = async () => {
    // Replace this with your actual API call
    const fetchedTasks = [
      { id: 1, title: 'Task 1', user: 'User 1', place: 'Place 1', description: 'Description simple text'},
      { id: 2, title: 'Task 2', user: 'User 2', place: 'Place 2', description: 'Description very long texthereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'}
    ];
    setTasks(fetchedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return [tasks, setTasks];
};

export default useTasks;
