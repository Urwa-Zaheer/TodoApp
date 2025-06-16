import React from 'react';
import { Card, CardContent, Typography, IconButton, Checkbox, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskItem({ task, onUpdate, onDelete }) {
  const toggleComplete = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  return (
    <Card>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Stack direction="row" spacing={1} alignItems="center">
            <Checkbox checked={task.completed} onChange={toggleComplete} />
            <div>
              <Typography variant="h6" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
              </Typography>
              {task.description && <Typography>{task.description}</Typography>}
            </div>
          </Stack>
          <IconButton onClick={() => onDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
