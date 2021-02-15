import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from '../../contexts/CounterContext'

const Counter = () => {
  const { counter } = useContext(CounterContext)! // if delete !, it will say error, since useContext can return something that implements CounterContextInterface or null

  return (
    <div>
      COUNTER:{counter}
      <br />
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Counter
