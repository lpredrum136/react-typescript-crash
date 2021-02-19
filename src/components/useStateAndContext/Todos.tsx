import React, { ChangeEvent, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { TodoContext } from '../../contexts/TodoContext'

const Todos = () => {
  const [title, setTitle] = useState('')

  const { todos, addTodo, deleteTodo } = useContext(TodoContext)!

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }
  return (
    <div>
      {todos.map(todo => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <input
        type='text'
        name='title'
        id='title'
        placeholder='New todo'
        onChange={onTitleChange}
        value={title}
      />
      <button onClick={addTodo.bind(this, { id: 3, title, completed: false })}>
        Add new todo
      </button>
      <button onClick={deleteTodo.bind(this, 3)}>
        Click to delete todo id 3
      </button>
      <br />
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Todos
