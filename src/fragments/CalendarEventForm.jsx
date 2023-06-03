import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import axios from 'axios';
import ICalendarLink from 'react-icalendar-link';

const CalendarEventForm = ({ setCalendarEvents, startDate, endDate }) => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventTag, setEventTag] = useState('');

    const syncEventWithTrello = (event) => {
        const cardData = {
            name: event.title,
            desc: event.description,
            due: event.endTime,
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

                // Upload .ics file to Trello card
                const icsFile = generateICSFile(event);
                uploadICSFileToTrello(cardId, icsFile);
            })
            .catch((error) => {
                // Handle errors
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

        return new Blob([icsContent], {type: 'text/calendar'});
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
                // Attachment uploaded successfully
                console.log('Attachment uploaded:', response.data);
            })
            .catch((error) => {
                // Handle errors
                console.error('Error uploading attachment:', error);
            });
    };

    const handleAddEvent = () => {
        if (eventTitle.trim() !== '' && eventDescription.trim() !== '') {
            const event = {
                title: eventTitle,
                description: eventDescription,
                startTime: startDate,
                endTime: endDate,
                tag: eventTag,
            };

            setCalendarEvents((prevEvents) => [...prevEvents, event]);
            setEventTitle('');
            setEventDescription('');
            setEventTag('');
            syncEventWithTrello(event);
        }
    };
    return (
        <Box
            component="div"
            sx={{
                '& .MuiInputBase-input': {color: '#ffffff'},
                '& .MuiOutlinedInput-notchedOutline': {borderColor: '#ffffff'},
                '&:hover .MuiOutlinedInput-notchedOutline': {borderColor: '#ffffff'},
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ffffff',
                },
                '& .MuiInputLabel-outlined': {color: '#ffffff'},
            }}
        >
            <TextField
                label="Event Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                sx={{marginRight: '10px'}}
            />
            <TextField
                label="Event Description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                sx={{marginRight: '10px'}}
            />
            <TextField
                label="Event Tag"
                value={eventTag}
                onChange={(e) => setEventTag(e.target.value)}
                sx={{marginRight: '10px'}}
            />
            <button className="add-event-btn" type="submit" onClick={handleAddEvent}>
                Add Event
            </button>
            {eventTitle.trim() !== '' && eventDescription.trim() !== '' && (
                <ICalendarLink
                    event={{
                        startTime: startDate,
                        endTime: endDate,
                        title: eventTitle,
                        description: eventDescription,
                    }}
                >
                    Add to Calendar
                </ICalendarLink>
            )}
        </Box>
    );
};

export default CalendarEventForm;
