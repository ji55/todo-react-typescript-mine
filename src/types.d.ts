type Todo = {
  id: number
  text: string
  complete: boolean
  importance: number
}

type AddTodo = (newTodo: string) => void

type ToggleTodo = (selectedTodo: Todo) => void

type DeleteTodo = (deleteTodo: Todo) => void