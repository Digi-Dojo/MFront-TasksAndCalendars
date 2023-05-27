import React, {useState} from 'react';
import {Box, TextField, Button} from "@mui/material";

const TaskCreateForm = ({ setTasks }) => {
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const [place, setPlace] = useState('');
    const [description, setDescription ] = useState('');
    
    const addTask = () => {
        if (title.trim() !== '' && description.trim() !== '') {
            setTasks((prevEvents) => [
                ...prevEvents,
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
    };
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
              onChange={(e) => setTitle(e.target.value)}
              sx={{ marginBottom: '15px' }}
              id="taskInput"
          />
          <TextField
              label="User"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              sx={{ marginBottom: '10px'}}
              id="taskInput"
          />
          <TextField
              label="Place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              sx={{ marginBottom: '10px' }}
              id="taskInput"
          />
          <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ marginBottom: '10px' }}
              id="taskInput"
          />
          <Button
              className="add-event-btn"
              type={"submit"}
              onClick={addTask}>Add Task
          </Button>
      </Box>
  );
};

export default TaskCreateForm;