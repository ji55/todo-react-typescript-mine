import React, { ChangeEvent } from 'react';
import { GlobalStyle } from './App.style'
import { TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import { TodoListItem } from './todoListItem'

const initialTodos: Array<Todo> = [

]


export const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [newTodo, setNewTodo] = useState('')
  const [count, setCount] = useState(0)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: any) => {
    if (e._reactName === "onKeyPress") {
      if (e.key === "Enter") {
        setTodos([...todos, {text: newTodo, complete: false, id: count, importance: 1}])
        setNewTodo("")
        setCount(count+1)
      }
    } else {
      setTodos([...todos, {text: newTodo, complete: false, id: count, importance: 1}])
      setNewTodo("")
      setCount(count+1)
    }
  }



  return (
    <div className="App">
      <GlobalStyle />
      <h1>TODO</h1>
      <TextField type="text" onChange={handleChange} onKeyPress={handleSubmit} value={newTodo} variant="outlined" size="small" />
      <Button type="submit" onClick={handleSubmit}>추가</Button>
      <ul>
        {todos.map(todo => {
          return <TodoListItem key={todo.id} todo={todo}/>
        })}
      </ul>
    </div>
  );
}

export default App;
