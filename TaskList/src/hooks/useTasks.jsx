import { useState, useEffect } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      // Creating a dummy task
      const fetchedTasks = [
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
