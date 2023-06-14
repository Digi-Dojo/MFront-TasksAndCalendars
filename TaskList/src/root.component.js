import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import useTasks from './hooks/useTasks'; 

const TasksList = () => {
    const [tasks, setTasks] = useTasks();
    const [completedTasks, setCompletedTasks] = useState([]);

    const toggleCompleted = (task, taskId) => {
        const newStatus = task.status === 'PENDING' ? 'DONE' : 'PENDING';
        const updatedTask = {
            ...task,
            status: newStatus,
        };

        // Modify the task in the tasks array
        setTasks(tasks.map(t => t.id === taskId ? updatedTask : t));

        // Update the completedTasks list
        if (newStatus === 'DONE') {
            setCompletedTasks([...completedTasks, taskId]);
        } else {
            setCompletedTasks(completedTasks.filter(id => id !== taskId));
        }
    };

    const maxHeight = {
        height: '75vh',
        overflow: 'auto',
    };

    useEffect(() => {
        // Initialization of the completedTasks, gets the initial status
        const initialCompletedTasks = tasks
            .filter(task => task.status === 'DONE')
            .map(task => task.id);
        setCompletedTasks(initialCompletedTasks);
    }, [tasks]);

    if (!tasks) {
        return <p>Loading tasks...</p>;
    }
    if (tasks.length === 0) {
        return <p>No tasks to display</p>;
    }

    var taskList = tasks.map((task, index) => (
        <div key={index}>
            <h3 style={{ textDecoration: completedTasks.includes(task.id) ? 'line-through' : '' }}>
                {task.title}
            </h3>
            <p>Description: {task.description}</p>
            <p>{task.user === null ? '' : 'User: ' + task.user}</p>
            <p>{task.place === null ? '' : 'Place: ' + task.place}</p>
            <p>{task.tags === null ? '' : 'tags: ' + task.tags}</p>
            <button onClick={() => toggleCompleted(task, task.id)}>
                {task.status === 'DONE' ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
            <br /><br />
        </div>
    ));

    return (
        <div>
            <Box sx={maxHeight}>
                <h2>Tasks List</h2>
                {taskList}
            </Box>
        </div>
    );
};

export default TasksList;
