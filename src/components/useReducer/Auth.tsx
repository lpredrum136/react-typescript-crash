import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const Auth = () => {
  const { isAuthenticated, dispatch } = useContext(AuthContext)!
  // console.log(authContextState)

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome user</p>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please login</p>
          <button>Login</button>
        </div>
      )}
    </div>
  )
}

export default Auth
