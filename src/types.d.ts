type Todo = {
  id: number
  text: string
  complete: boolean
  importance: number
}

type AddTodo = (newTodo: string) => void

type Todos = Array<Todo>