import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString()
    });
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} my={2}>
        <TextField
          label="Task Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description (optional)"
          value={description}
          onChange={e => setDesc(e.target.value)}
        />
        <Button type="submit" variant="contained">Add Task</Button>
      </Stack>
    </form>
  );
}
