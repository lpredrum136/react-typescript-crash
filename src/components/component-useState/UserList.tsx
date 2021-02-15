import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [user, setUser] = useState<object | null>(null)

  return (
    <Fragment>
      <p>User List</p>
      <Link to='/'>Home</Link>
    </Fragment>
  )
}

export default UserList
