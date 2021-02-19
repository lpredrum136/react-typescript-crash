import { ReactNode, createContext, useState } from 'react'

// Declare
interface ITodoContextProps {
  children: ReactNode
}
interface ITodo {
  id: number
  title: string
  completed: boolean
}

type TodoContextType = {
  todos: ITodo[]
  addTodo: (newTodo: ITodo) => void
  deleteTodo: (todoId: number) => void
}

export const TodoContext = createContext<TodoContextType | null>(null)

const TodoContextProvider = ({ children }: ITodoContextProps) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Job 1',
      completed: false
    },
    {
      id: 2,
      title: 'Job 2',
      completed: false
    }
  ])

  const sampleTodoData: TodoContextType = {
    todos,
    addTodo: (newTodo: ITodo) => {
      console.log(newTodo)
    },
    deleteTodo: (todoId: number) => {
      console.log(todoId)
    }
  }

  return (
    <TodoContext.Provider value={sampleTodoData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
