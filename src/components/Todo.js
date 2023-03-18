import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  const handleEditClick = () => {
    const newValue = prompt('Edit the todo item:', todo.text);
    if (newValue) {
      editTodo(todo.id, newValue);
    }
  };

  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onChange={handleCheckboxClick}
      />
      <ListItemText
        primary={todo.text}
        style={{ textDecoration: todo.completed ? 'line-through' : '' }}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton edge="end" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
