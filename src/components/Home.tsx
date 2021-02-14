import React from 'react'

import Welcome from './Welcome'
import Time from './Time'
import InputText from './InputText'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Welcome username='henry' userType='admin' />
      <Time />
      <InputText />
      <Link to='/users'>Users</Link>
    </div>
  )
}

export default Home
