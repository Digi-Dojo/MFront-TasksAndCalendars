import React from 'react';
import { Box } from "@mui/system";
import dayjs from 'dayjs';
import { Title } from "../components/Title";
import { useTasks } from "../hooks/useTasks";
import 'react-calendar/dist/Calendar.css';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {pickersLayoutClasses} from "@mui/x-date-pickers";

export const CalendarFragment = () => {
    const [tasks] = useTasks();

    const maxHeight = {
        height: '75vh',
        overflow: 'auto'
    };

    return (
        <div>
            <Title secondary>Calendar</Title>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateRangePicker
                    defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                    sx={{
                        [`.${pickersLayoutClasses.contentWrapper}`]: {
                            alignItems: 'center',
                        },
                    }}
                />
            </LocalizationProvider>

            <Box sx={maxHeight}>
                {tasks.map((task) => (
                    <div key={task.id}>
                        <h3>{task.title}</h3>
                        <p>User: {task.user}</p>
                        <p>Place: {task.place}</p>
                    </div>
                ))}
            </Box>
        </div>
    );
};

export default CalendarFragment;
