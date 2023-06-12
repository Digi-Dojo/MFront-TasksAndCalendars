import React, { useState } from 'react';
import { Box, TextField } from "@mui/material";

const TaskCreateForm = ({ setTasks }) => {
    
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
            setTasks(formData);

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
                '& .MuiInputBase-input': { color: '#ffffff' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
                '& .MuiInputLabel-outlined': { color: '#000000' },
            }}
        >
            <TextField
                name="title"
                label="Task title"
                value={formData.title}
                onChange={handleInputChange}
                sx={{ marginBottom: '15px' }}
            />
            <TextField
                name="user"
                label="Task user"
                value={formData.user}
                onChange={handleInputChange}
                sx={{ marginBottom: '10px' }}
            />
            <TextField
                name="place"
                label="Task place"
                value={formData.place}
                onChange={handleInputChange}
                sx={{ marginBottom: '10px' }}
            />
            <TextField
                name="description"
                label="Task description"
                value={formData.description}
                onChange={handleInputChange}
                sx={{ marginBottom: '10px' }}
            />
            <TextField
                name="tags"
                label="Task tags"
                value={formData.tags}
                onChange={handleInputChange}
                sx={{ marginBottom: '10px' }}
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