import { createContext, Dispatch, ReactNode, useReducer } from 'react'

import { authReducer, AuthActionType } from '../reducers/AuthReducer'

interface IAuthContextProps {
  children: ReactNode
}

type AuthContextType = {
  isAuthenticated: boolean
  dispatch: Dispatch<AuthActionType>
}

const initialIsAuthenticated = false

// here we must initialise it, cannot do createContext<AuthContextType | null>(null)
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: initialIsAuthenticated,
  dispatch: () => null
})

const AuthContextProvider = ({ children }: IAuthContextProps) => {
  const [isAuthenticated, dispatch] = useReducer(
    authReducer,
    initialIsAuthenticated
  )

  const authContextData: AuthContextType = {
    isAuthenticated,
    dispatch
  }

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
