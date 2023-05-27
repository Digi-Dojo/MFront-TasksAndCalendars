import React, {useState} from 'react';
import { Box } from '@mui/material';

const TasksList = ({ tasks }) => {
    const [completed, setCompleted] = useState(false);

    const toggleCompleted = () => {
        setCompleted(!completed);
    };

    const maxHeight = {
        height: '75vh',
        overflow: 'auto',
    };

    return (
        <div>
            <Box sx={maxHeight}>
                <h2>Tasks</h2>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <h3>{task.title}</h3>
                        <p>Description: {task.description}</p>
                        <p>User: {task.user}</p>
                        <p>Place: {task.place}</p>
                        <br></br><br></br>
                    </div>
                ))}
            </Box>
        </div >
    );
};

export default TasksList;
