import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import axios from '../utils/axios'

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
    }

    const addEvent = () => {
        if (formData.title.trim() !== '' && formData.description.trim() !== '') {
            if (formData.place === "") formData.place = null;
            if (formData.user === "") formData.user = null;
            if (formData.tags === "") formData.tags = null;

            const newEvent = {
                ...formData,
                startDate: startDate,
                endDate: endDate
            };

            setCalendarEvent(newEvent);

            setFormData({
                title: '',
                description: '',
                startDate: startDate,
                endDate: endDate,
                user: '',
                place: '',
                tags: '',
            });

            syncEventWithTrello(newEvent);
        }
    };

    const syncEventWithTrello = (event) => {
        console.log(event);
        const cardData = {
            name: event.title,
            desc: event.description + '\nStartDate: ' + event.startDate,
            due: event.endDate, // setting the due date
            idList: '6475e6c01fd186e2509f7f22', // Replace with the appropriate Trello list ID
        };

        // old key  : c70932b508c303c193d6c398dadca876
        // old token : see backend
        // new key: ssa_token

        const url = `https://api.trello.com/1/cards?key=c70932b508c303c193d6c398dadca876&token=ATTA73a2516e27b1f01ee73a814f197eb8a7ab9d9aa4bb9d82a60bc63750d28c49f9AE89D8AA`;
        axios
            .post(url, cardData)
            .then((response) => {
                const cardId = response.data.id;

                const icsFile = generateICSFile(event);
                uploadICSFileToTrello(cardId, icsFile);
            })
            .catch((error) => {
                console.error('Error creating card:', error);
            });
    };

    const generateICSFile = (event) => {
        const icsContent = `BEGIN:VCALENDAR
        VERSION:2.0
        PRODID:-//Your Company//Your App//EN
        BEGIN:VEVENT
        UID:${Math.random().toString(36).substr(2, 9)}
        DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}
        DTSTART:${event.startTime.toISOString().replace(/[-:.]/g, '')}
        DTEND:${event.endTime.toISOString().replace(/[-:.]/g, '')}
        SUMMARY:${event.title}
        DESCRIPTION:${event.description}
        END:VEVENT
        END:VCALENDAR`;

        return new Blob([icsContent], { type: 'text/calendar' });
    };

    const uploadICSFileToTrello = (cardId, icsFile) => {
        const attachmentUrl = `https://api.trello.com/1/cards/P2st1jb5/attachments?key==c70932b508c303c193d6c398dadca876&token=ATTA73a2516e27b1f01ee73a814f197eb8a7ab9d9aa4bb9d82a60bc63750d28c49f9AE89D8AA`;

        const formData = new FormData();
        formData.append('file', icsFile, 'calendar_event.ics');

        axios
            .post(attachmentUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log('Attachment uploaded:', response.data);
            })
            .catch((error) => {
                console.error('Error uploading attachment:', error);
            });
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