import React, { useState } from 'react';
import { Box, TextField } from "@mui/material";
import useTasks from '../../TaskList/src/hooks/useTasks';

const TaskCreateForm = ({}) => {
    const [tasks, setTasks, createTask] = useTasks();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        user: '',
        place: '',
        status: 0,
        tags: ''
    });

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }
      

    const addTask = () => {
        if (formData.title.trim() !== '' && formData.description.trim() !== '') {
            createTask(formData);

            console.log("formData: ");
            console.log(formData);
            
            setFormData({
                title: '',
                description: '',
                user: '',
                place: '',
                status: 0,
                tags: ''
            });
        }
    };

    return (
        <Box
            component="div"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                '& .MuiInputBase-input': { color: '#FFFFFF' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#00000' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#000000' },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#000000' },
                '& .MuiInputLabel-outlined': { color: '#000000' },
            }}
        >
            <TextField
                name="title"
                label="Task title"
                value={formData.title}
                onChange={handleInputChange}
                sx={{ marginBottom: '15px' }}
                inputProps={{ style: { color: 'black' } }}
                />
            <TextField
                name="user"
                label="Task user"
                value={formData.user}
                onChange={handleInputChange}
                sx={{ marginBottom: '10px' }}
                inputProps={{ style: { color: 'black' } }}
                />
            <TextField
                name="place"
                label="Task place"
                value={formData.place}
                onChange={handleInputChange}
                sx={{ marginBottom: '10px' }}
                inputProps={{ style: { color: 'black' } }}
                />
            <TextField
                name="description"
                label="Task description"
                value={formData.description}
                onChange={handleInputChange}
                sx={{ marginBottom: '10px' }}
                inputProps={{ style: { color: 'black' } }}
                />
            <TextField
                name="tags"
                label="Task tags"
                value={formData.tags}
                onChange={handleInputChange}
                sx={{ marginBottom: '10px' }}
                inputProps={{ style: { color: 'black' } }}
                />
            <button
                className="add-event-btn"
                type="button"   // change type here to 'button'
                onClick={addTask}>
                Add Task
            </button>
        </Box>
    );
};

export default TaskCreateForm;