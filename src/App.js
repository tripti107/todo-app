import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import TaskInput from './components/todo/TaskInput';
import TaskList from './components/todo/TaskList';

const App = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Todo App
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TaskInput />
        </Grid>
        <Grid item xs={12}>
          <TaskList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
