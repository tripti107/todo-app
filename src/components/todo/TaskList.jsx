import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/actions/todoActions';
import TaskItem from './TaskItem';
import { List, Typography } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Tasks
      </Typography>
      <List>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => dispatch(deleteTask(task.id))}
          />
        ))}
      </List>
    </div>
  );
};

export default TaskList;