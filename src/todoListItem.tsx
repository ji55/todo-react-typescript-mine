import React from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import "./todoListItem.css"

interface TodoListItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo}) => {
  return (
    <ul>
      <Checkbox
        color="primary"
        checked={todo.complete}
        onChange={() => toggleTodo(todo)}
      />
      <span 
        className={todo.complete ? "complete" : undefined}
        onClick={() => toggleTodo(todo)}
      >
        {todo.text}
      </span>
      <IconButton color="secondary" size="small">
        <Close fontSize="inherit" />
      </IconButton>
    </ul>
  )
}