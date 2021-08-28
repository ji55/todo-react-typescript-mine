import React from 'react';
import { IconButton } from '@material-ui/core';
import { Close, Check } from '@material-ui/icons';
import "./todoListItem.css"

interface TodoListItemProps {
  todo: Todo
  toggleTodo: ToggleTodo
  deleteTodo: DeleteTodo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, toggleTodo, deleteTodo}) => {

  return (
    <div className="listItem">
      <p
        className={todo.complete ? "complete" : undefined}
        onClick={() => toggleTodo(todo)}
      >
        {todo.text}
      </p>
      { todo.complete ? 
        <div className="complete">
          <IconButton 
            size="small" 
            disabled
            >
            <Check fontSize="inherit" />
          </IconButton>
          <span className="rating">⭐{todo.importance}</span>
          <IconButton 
            color="secondary" 
            size="small" 
            onClick={()=>deleteTodo(todo)}
            className="completeDelete"
            >
            <Close fontSize="inherit" />
          </IconButton>
        </div>
        : <div>
          <span className="rating">⭐{todo.importance}</span>
          <IconButton 
            color="secondary" 
            size="small" 
            onClick={()=>deleteTodo(todo)}
            className="deleteBtn"
            >
            <Close fontSize="inherit" />
          </IconButton>
        </div>
      }
    </div>
  )
}