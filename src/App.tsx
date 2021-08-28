import React, { ChangeEvent } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useState } from 'react';
import { TodoListItem } from './todoListItem';
import "./App.css"

const initialTodos: Array<Todo> = []


export const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [newTodo, setNewTodo] = useState('')
  const [count, setCount] = useState(0)
  const [rating, setRating] = useState(0) || undefined

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  } 

  const deleteTodo: DeleteTodo = deleteTodo => {
    setTodos(todos.filter(todo => todo.id !== deleteTodo.id))
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: any) => {
    if (e._reactName === "onKeyPress") {
      if (e.key === "Enter") {
        setTodos([...todos, {text: newTodo, complete: false, id: count, importance: rating}])
        setNewTodo("")
        setCount(count+1)
        setRating(0)
      }
    } else {
      setTodos([...todos, {text: newTodo, complete: false, id: count, importance: rating}])
      setNewTodo("")
      setCount(count+1)
      setRating(0)
    }
  }

  const handleRating = (e: any) => {
    setRating(e.target.value)
  }


  return (
    <div className="App">
      <h1>TODO</h1>
      <p>Todos are for careful people,<br />
        not passionate ones.</p>
      <Rating name="rating" size="small" onChange={handleRating} value={rating} />
      <br />
      <TextField type="text" onChange={handleChange} onKeyPress={handleSubmit} value={newTodo} variant="outlined" size="small" />
      <Button type="submit" onClick={handleSubmit}>추가</Button>
      <div>
        {todos.map(todo => {
          return <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        })}
      </div>
    </div>
  );
}

export default App;
