import { createContext } from 'react'

// Declare
interface ITodo {
  id: number
  title: string
  completed: boolean
}

type TodoContextType = {
  todos: ITodo[]
  addTodo: (newTodo: ITodo) => void
  updateTodo: (todoId: number) => void
}

export const TodoContext = createContext<TodoContextType | null>(null)

const TodoContextProvider = ({ children }) => {
  const sampleTodoData: TodoContextType = {
    todos: [
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
    ],
    addTodo: (newTodo: ITodo) => {
      console.log(newTodo)
    },
    updateTodo: (todoId: number) => {
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
