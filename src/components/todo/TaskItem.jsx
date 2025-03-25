import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, fetchWeather, toggleCompleted } from '../../redux/actions/todoActions';
import { Card, CardContent, Typography, IconButton, Grid, Chip, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (task.isOutdoor && task.location) {
      dispatch(fetchWeather(task.id, task.location));
    }
  }, [dispatch, task.id, task.isOutdoor, task.location]);
  // const handleCompleted = () => {
  //   console.log("clicked");
  //   dispatch(toggleCompleted(task.id))
  // }
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h6">{task.text}</Typography>
            <Chip
              label={task.priority}
              color={
                task.priority === 'High' ? 'error' : 
                task.priority === 'Medium' ? 'warning' : 'success'
              }
              size="small"
              sx={{ mt: 1 }}
            />
            {task.isOutdoor && (
              <Chip
                icon={<WbSunnyIcon />}
                label={task.weather ? 
                  `${task.weather.temp}°C ${task.weather.description}` : 
                  'Loading weather...'}
                color="info"
                size="small"
                sx={{ mt: 1, ml: 1 }}
              />
            )}
          </Grid>
          <Grid item xs={4} container justifyContent="flex-end">
            <IconButton onClick={() => dispatch(deleteTask(task.id))}>
              <DeleteIcon color="error" />
            </IconButton>
            <Button variant="contained" size="small" color={task.completed?"success":"warning"} onClick={()=>{dispatch(toggleCompleted(task.id))}}>
              {task.completed?"Completed":"Pending"}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TaskItem;