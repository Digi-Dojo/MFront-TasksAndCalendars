import React, { useState } from 'react';
import { Box, TextField } from "@mui/material";
//NOT ON RENDER
const TaskCreateForm = ({ setTasks }) => {
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription] = useState('');

    const addTask = () => {
        if (title.trim() !== '' && description.trim() !== '') {
            setTasks((prevTasks) => [
                ...prevTasks,
                {
                    title: title,
                    user: user,
                    place: place,
                    description: description,
                },
            ]);
            setTitle('');
            setUser('');
            setPlace('');
            setDescription('');
        }
        handleSubmit();
    };

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        user: null,
        place: null,
        status: 0
    });

    const handleSubmit = () => {
        setTasks(formData);
    }
    
    const handleTitleChange = (e) =>{
        setFormData({
            ...formData, 
            title: e.target.value,
        })
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) =>{
        setFormData({
            ...formData, 
            description: e.target.value,
        })
        setDescription(e.target.value);
    }

    const handleUserChange = (e) =>{
        setFormData({
            ...formData, 
            user: e.target.value,
        })
        setUser(e.target.value);
    }

    const handlePlaceChange = (e) =>{
        setFormData({
            ...formData, 
            place: e.target.value,
        })
        setPlace(e.target.value);
    }

    
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
                '& .MuiInputLabel-outlined': { color: '#ffffff' },
            }}
        >
            <TextField
                label="Title"
                value={title}
                numvalue={formData.title}
                onChange={handleTitleChange}
                sx={{ marginBottom: '15px' }}
                id="taskInput"
            />
            <TextField
                label="User"
                value={user}
                numvalue={formData.user}
                onChange={handleUserChange}
                sx={{ marginBottom: '10px' }}
                id="taskInput"
            />
            <TextField
                label="Place"
                value={place}
                numvalue={formData.place}
                onChange={handlePlaceChange}
                sx={{ marginBottom: '10px' }}
                id="taskInput"
            />
            <TextField
                label="Description"
                value={description}
                numvalue={formData.description}
                onChange={handleDescriptionChange}
                sx={{ marginBottom: '10px' }}
                id="taskInput"
            />
            <button
                className="add-event-btn"
                type="button"   // change type here to 'button'
                onClick={addTask}
            >
                Add Task
            </button>
        </Box>
    );
};

export default TaskCreateForm;