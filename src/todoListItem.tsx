import React from 'react';

interface TodoListItemProps {
  todo: Todo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo}) => {
  return (
    <ul>
      {todo.text}
    </ul>
  )
}