import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const CalendarEventForm = ({ setCalendarEvent, startDate, endDate }) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startDate: startDate,
        endDate: endDate,
        user: '',
        place: '',
        tags: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
        console.log('Changing value of ' + name + ' to ' + value)
    }

    const addEvent = () => {
        if (formData.title.trim() !== '' && formData.description.trim() !== '') {
            if(formData.place === "") formData.place = null;
            if(formData.user === "") formData.user = null;
            if(formData.tags === "") formData.tags = null;
            setCalendarEvent(formData);

            setFormData({
                title: '',
                description: '',
                startDate: startDate,
                endDate: endDate,
                user: '',
                place: '',
                tags: '',
            });
        }
    };

    return (
        <Box
            component="div"
            sx={{
                '& .MuiInputBase-input': { color: '#ffffff' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#ffffff' },
                '& .MuiInputLabel-outlined': { color: '#ffffff' },
            }}
        >
            <TextField
                name="title"
                label="Event Title"
                value={formData.title}
                onChange={handleInputChange}
                sx={{ marginRight: '10px' }}
            />
            <TextField
                name="description"
                label="Event Description"
                value={formData.description}
                onChange={handleInputChange}
                sx={{ marginRight: '10px' }}
            />
            <TextField
                name="user"
                label="Event user"
                value={formData.user}
                onChange={handleInputChange}
                sx={{ marginRight: '10px' }}
            />
            <br></br>
            <TextField
                name="place"
                label="Event place"
                value={formData.place}
                onChange={handleInputChange}
                sx={{ marginRight: '10px' }}
            />
            <TextField
                name="tags"
                label="Event Tag"
                value={formData.tags}
                onChange={handleInputChange}
                sx={{ marginRight: '10px' }}
            />
            <button 
                className="add-event-btn" 
                type="button" 
                onClick={addEvent}> 
                Add Event 
            </button>
        </Box>
    );
};

export default CalendarEventForm;