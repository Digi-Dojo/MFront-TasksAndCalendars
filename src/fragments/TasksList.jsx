import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const TasksList = ({ tasks, setStatus }) => {
    const [completedTasks, setCompletedTasks] = useState([]);

    const toggleCompleted = (task, taskId) => {
        const newStatus = task.status === 'PENDING' ? 'DONE' : 'PENDING';
        setStatus({
            taskId: taskId,
            description: task.description,
            status: newStatus,
            user: task.user,
            place: task.place,
            tags: task.tags
        }).then(() => {
            //after the status is changed in the database, modify the completedTask list
            if (newStatus === 'DONE') {
                setCompletedTasks([...completedTasks, taskId]);
            } else {
                setCompletedTasks(completedTasks.filter(id => id !== taskId));
            }
        });
    };

    const maxHeight = {
        height: '75vh',
        overflow: 'auto',
    };

    useEffect(() => {
        //Initialization of the completedTask, gets the initial status
        const initialCompletedTasks = tasks
            .filter(task => task.status === 'DONE')
            .map(task => task.id);
        setCompletedTasks(initialCompletedTasks);
    }, [tasks]);

    var taskList = <br />;
    if (tasks.length > 0) {
        taskList = tasks.map((task, index) => (
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
    }

    return (
        <div>
            <Box sx={maxHeight}>
                <h2>Tasks</h2>
                {taskList}
            </Box>
        </div>
    );
};

export default TasksList;
