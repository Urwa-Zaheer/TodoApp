import React from 'react';
import TaskItem from './TaskItem';
import { Stack } from '@mui/material';

export default function TaskList({ tasks, onUpdate, onDelete }) {
  return (
    <Stack spacing={2}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </Stack>
  );
}
