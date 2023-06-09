// imported useEffect, see explaination below where we used it. ( line 45)

import React, { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';
import axios from "axios";


const CalendarEventForm = ({ setCalendarEvent, startDate, endDate }) => {

    const syncEventWithTrello = (event) => {
        const cardData = {
            name: event.title,
            desc: event.description,
            due: new Date(event.endDate).toISOString(),
            idList: '6475e6c01fd186e2509f7f22', // Replace with the appropriate Trello list ID
        };

        // commented code, decomment if u want to add also events on trello

        const url = `https://api.trello.com/1/cards?key=c70932b508c303c193d6c398dadca876&token=ATTA73a2516e27b1f01ee73a814f197eb8a7ab9d9aa4bb9d82a60bc63750d28c49f9AE89D8AA`;
        axios
            .post(url, cardData)
            .catch((error) => {
                // Handle errors
                console.error('Error creating card:', error);
            });
    };

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startDate: startDate,
        endDate: endDate,
        tag: '',
    });


    // added useEffect otherwise only one event was created with the right date, and the other not.

    useEffect(() => {
        const adjustedStartDate = new Date(startDate);
        adjustedStartDate.setDate(startDate.getDate() + 1);

        setFormData((prevFormData) => ({
            ...prevFormData,
            startDate: adjustedStartDate,
            endDate: endDate,
        }));
    }, [startDate, endDate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const addEvent = () => {
        if (formData.title.trim() !== '' && formData.description.trim() !== '') {
            setCalendarEvent(formData);
            syncEventWithTrello(formData);
            setFormData({
                title: '',
                description: '',
                startDate:startDate,
                endDate:endDate,
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