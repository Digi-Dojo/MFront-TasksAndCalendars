import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';


 /*
    This class should just represend the form component.
    Once the addEvent button gets pressed, the event should appear in the list provided by the CalendarEventList component.
    */
   
const CalendarEventForm = ({ setCalendarEvents, startDate, endDate }) => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventTag, setEventTag] = useState('');

    const addEvent = () => {
        if (eventTitle.trim() !== '' && eventDescription.trim() !== '') {
            setCalendarEvents((prevEvents) => [
                ...prevEvents,
                {
                    title: eventTitle,
                    description: eventDescription,
                    startDate: startDate,
                    endDate: endDate,
                    tag: eventTag,
                },
            ]);
            setEventTitle('');
            setEventDescription('');
            setEventTag('');
        }
        handleSubmit();
    };

    const [formData, setFormData] = useState({
        description: null,
        startDate: startDate,
        endDate: endDate,
        tag: null
    });


    const handleSubmit = () =>{
        setCalendarEvents(formData);
    }

    const handleDescriptionChange = (e) =>{
        setFormData({
            ...formData, 
            description: e.target.value,
        })
        setEventDescription(e.target.value);
    }

    const handleTagChange = (e) =>{
        setFormData({
            ...formData, 
            tag: e.target.value,
        })
        setEventTag(e.target.value);
    }

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
                label="Event Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                sx={{ marginRight: '10px' }}
            />
            <TextField
                label="Event Description"
                value={eventDescription}
                numvalue={formData.description}
                onChange={handleDescriptionChange}
                sx={{ marginRight: '10px'}}
            />
            <TextField
                label="Event Tag"
                value={eventTag}
                numvalue={formData.tag}
                onChange={handleTagChange}
                sx={{ marginRight: '10px' }}
            />
            <button className="add-event-btn" type="submit" onClick={addEvent}> Add Event </button>
        </Box>
    );
};


export default CalendarEventForm;
