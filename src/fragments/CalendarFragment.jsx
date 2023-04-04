import { Box } from "@mui/system";
import { Title } from "../components/Title";
import { BreedsList } from "../components/BreedsList";
import { useTasks } from "../hooks/useTasks";
import React, { useState } from 'react';
import Calendar from 'react-calendar';



function MyApp() {
  const [value, onChange] = useState(new Date());
  
  export const Tasks = () => {
    const tasks = useTasks()

  const maxHeight = {
    height: '75vh',
    overflow: 'auto'
  }

  return (
    <div>
      <Title secondary>Calendar</Title>
      <Calendar onChange={onChange} value={value} />
      <Box sx={maxHeight}>
       <BreedsList items={ tasks } />
     </Box>
    </div>
  );
}
