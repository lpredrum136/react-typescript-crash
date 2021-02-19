import React from 'react'

import Welcome from './pass-and-own-props/Welcome'
import Time from './component-useState/Time'
import InputText from './component-useState/InputText'
import Auth from './useReducer/Auth'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Welcome username='henry' userType='admin' />
      <Time />
      <InputText />
      <Auth />

      {/* Other routes */}
      <Link to='/users'>Users</Link>
      <br />
      <Link to='/counter'>Counter</Link>
      <br />
      <Link to='/theme'>Theme</Link>
      <br />
      <Link to='/todos'>Todos</Link>
      <br />
      <Link to='/posts'>Posts</Link>
    </div>
  )
}

export default Home
