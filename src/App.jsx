import React, { useEffect, useState } from 'react';
import { Container, Typography, IconButton, Stack, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useThemeContext } from './context/ThemeContext';
import { getTasks, saveTasks } from './utils/localStorage';

export default function App() {
  const { mode, toggleTheme } = useThemeContext();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => setTasks(prev => [...prev, task]);
  const updateTask = (updated) =>
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));
  const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id));

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true :
    filter === 'completed' ? task.completed :
    !task.completed
  );

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
        <Typography variant="h4">ToDo App</Typography>
        <IconButton onClick={toggleTheme}>
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Stack>

      <TaskForm onAdd={addTask} />

      <Stack direction="row" spacing={1} my={2}>
        <Button onClick={() => setFilter('all')}>All</Button>
        <Button onClick={() => setFilter('completed')}>Completed</Button>
        <Button onClick={() => setFilter('pending')}>Pending</Button>
      </Stack>

      <TaskList
        tasks={filteredTasks}
        onUpdate={updateTask}
        onDelete={deleteTask}
      />
    </Container>
  );
}
