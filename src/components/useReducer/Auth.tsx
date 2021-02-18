import { MouseEvent, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { AuthActionStaticType } from '../../reducers/types'

const Auth = () => {
  const { TOGGLE_AUTH } = AuthActionStaticType
  const { isAuthenticated, dispatch } = useContext(AuthContext)
  // console.log(authContextState)

  const toggleAuth = (event: MouseEvent): void => {
    dispatch({
      type: 'TOGGLE_AUTH',
      payload: null
    })
  }

  return (
    <div>
      <p>{isAuthenticated ? 'Welcome user' : 'Please login'}</p>
      <button onClick={toggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default Auth
