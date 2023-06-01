import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

const CalendarEventForm = ({ setCalendarEvent, startDate, endDate }) => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startDate: startDate,
        endDate: endDate,
        tag: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const addEvent = () => {
        if (formData.title.trim() !== '' && formData.description.trim() !== '') {
            setCalendarEvent(formData);

            setFormData({
                title: '',
                description: '',
                startDate: startDate,
                endDate: endDate,
                tag: '',
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
                name="tag"
                label="Event Tag"
                value={formData.tag}
                onChange={handleInputChange}
                sx={{ marginRight: '10px' }}
            />
            <button className="add-event-btn" type="submit" onClick={addEvent}> Add Event </button>
        </Box>
    );
};

export default CalendarEventForm;
