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
    async function updateStatus({ taskId, description, place, user, status, tags }) {
        //Needed a param constant, for the given parameters (taskId, description, etc.) to be query parameters
        const params = {
            description: description ? description : null,
            user: user ? user : null,
            place: place ? place : null,
            tags: tags ? tags : null,
            status: status ? status : null
        };

        return axios.post(`api/tasks/update/${taskId}`, null, { params })
            .then(response => {
                getTasks();
                return response;
            });
    }

    function setStatus(task) {
        return updateStatus(task);
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

    return [tasks, setTask, setStatus];
};

export default useTasks;  
