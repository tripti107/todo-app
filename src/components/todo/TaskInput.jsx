import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions/todoActions';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const TaskInput = () => {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [isOutdoor, setIsOutdoor] = useState(false);
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    
    const newTask = {
      id: Date.now(),
      text: taskText,
      priority,
      isOutdoor,
      location,
      weather: null
    };
    
    dispatch(addTask(newTask));
    setTaskText('');
    setPriority('Medium');
    setIsOutdoor(false);
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New Task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <label>
          <input
            type="checkbox"
            checked={isOutdoor}
            onChange={(e) => setIsOutdoor(e.target.checked)}
          />
          Outdoor Activity
        </label>
        {isOutdoor && (
          <TextField
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
            margin="normal"
          />
        )}
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add Task
      </Button>
    </form>
  );
};

export default TaskInput;