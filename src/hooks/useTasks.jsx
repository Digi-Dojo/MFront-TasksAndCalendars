import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  async function post({description, place, user, status, title}) {

    return axios.post('api/tasks/create', {
            description: description,
            user: user,
            place: place,
            status: status,
            title: title
        })
        .then(message =>{
          getTasks();
          return message
        } )
  }

  function setTask(task){
    return post(task);
  }

  async function get() {
    const { data } = await axios.get('api/tasks/getAll');
    setTasks(data);
  }

  function getTasks() {
    get();
  }

  // const fetchTasks = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/api/tasks/getAll'); 
  //     const fetchedTasks = response.json();

  //     console.log("Tasks: " + JSON.stringify(fetchedTasks));

  //     setTasks(fetchedTasks);

  //   } catch (error) {
  //     console.error('Error fetching tasks:', error);
  //   }
  // };

  useEffect(getTasks, []);

  return [tasks, setTask];
};

export default useTasks;  
