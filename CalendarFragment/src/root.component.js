import React, { useState } from 'react';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const CalendarFragment = ({ setSelectedStartDate, setSelectedEndDate }) => {
    const [selectedStartDate, setSelectedStartDateLocal] = useState();
    const [selectedEndDate, setSelectedEndDateLocal] = useState();

    const handleStartDateChange = (date) => {
        const startOfDate = dayjs(date).startOf('day').toDate();
        setSelectedStartDateLocal(startOfDate);
        setSelectedStartDate(startOfDate);
    };

    const handleEndDateChange = (date) => {
        const startOfDate = dayjs(date).endOf('day').toDate();
        setSelectedEndDateLocal(startOfDate);
        setSelectedEndDate(startOfDate);
    };

    return (
        <div>
            <h3>Select Start and End Dates</h3>
            <Box
                component="div"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& .react-calendar__navigation button': {
                        color: '#ffffff',
                        background: '#ffffff',
                        border: '1px solid #000000',
                    },
                    '& .react-calendar__tile--active': {
                        color: '#ffffff',
                        background: '#112d16',
                        border: '#2e5b32 4px solid',
                        '&:enabled': {
                            '&:focus': {
                                background: '#112d16',
                            },
                        },
                    },
                    '& .react-calendar__tile': {
                        borderRadius: '50%',
                        '&.react-calendar__tile--rangeStart': {
                            borderRadius: '50% 0 0 50%',
                            borderRight: 'none',
                        },
                        '&.react-calendar__tile--rangeEnd': {
                            borderRadius: '0 50% 50% 0',
                            borderLeft: 'none',
                        },
                        '&.react-calendar__tile--rangeBothEnds': {
                            borderRadius: '50%',
                            border: '#2e5b32 4px solid',
                        },
                        width: '50px',
                        height: '50px',
                        lineHeight: '1.5px',
                        '&:not(.react-calendar__month-view__days__day--neighboringMonth)': {
                            '&:not(.react-calendar__month-view__days__day--weekend)': {
                                color: '#bababa'
                            },
                        },
                        '&:hover': {
                            background: '#292732',
                            border: '#201e29 5px solid',
                        },
                        '&.react-calendar__tile--range': {
                            '&:not(.react-calendar__tile--rangeStart)': {
                                '&:not(.react-calendar__tile--rangeEnd)': {
                                    borderRadius: '0',
                                    borderRight: 'none',
                                    borderLeft: 'none',
                                }
                            },
                        },
                        '&.react-calendar__tile--hover': {
                            background: '#112d16',
                            borderRadius: '0',
                            borderRight: 'none',
                            borderLeft: 'none',
                        },
                        '&.react-calendar__tile--now': {
                            '&:not(.react-calendar__tile--active)': {
                                background: '#181818',
                                border: '#292732 2px dashed',
                                '&:hover': {
                                    background: '#292732',
                                    border: '#201e29 5px solid',
                                },
                            },
                            '&.react-calendar__tile--range': {
                                '&:not(.react-calendar__tile--rangeStart)': {
                                    '&:not(.react-calendar__tile--rangeEnd)': {
                                        borderRadius: '0',
                                        borderRight: 'none',
                                        borderLeft: 'none',
                                    }
                                },
                            },
                        },
                    },
                }}
            >
                 <Calendar
                    selectRange={true}
                    onChange={(dateRange) => {
                        handleStartDateChange(dateRange[0]);
                        handleEndDateChange(dateRange[1]);
                    }}
                    value={[selectedStartDate, selectedEndDate]}
                />
            </Box>
        </div>
    );
};

export default CalendarFragment;